"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, type RegistrationFormData } from "@/lib/validation/registration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Panel } from "@/components/ui/panel";
import { motion, AnimatePresence } from "framer-motion";

const steps = ["IDENTITY", "ACADEMIC", "TECH PROFILE", "CONFIRM"];

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      collegeEmail: "",
      phoneNumber: "",
      rollNumber: "",
      branch: undefined,
      year: undefined,
      section: "",
      programmingExperience: undefined,
      preferredLanguage: undefined,
      githubUrl: "",
      consentGiven: undefined,
    },
    mode: "onTouched"
  });

  const { register, handleSubmit, formState: { errors }, trigger, watch } = form;

  const nextStep = async () => {
    let fieldsToValidate: (keyof RegistrationFormData)[] = [];
    if (currentStep === 0) fieldsToValidate = ["fullName", "collegeEmail", "phoneNumber", "rollNumber"];
    if (currentStep === 1) fieldsToValidate = ["branch", "year", "section"];
    if (currentStep === 2) fieldsToValidate = ["programmingExperience", "preferredLanguage", "githubUrl"];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const selectedBranch = watch("branch");

  const onSubmit = async (data: RegistrationFormData) => {
    if (data.branch === 'OTHER' && data.otherBranch) {
      data.branch = data.otherBranch.toUpperCase();
    }
    setIsSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      
      if (!res.ok) {
        if (res.status === 409) {
          form.setError(result.field, { message: "This entry is already registered" });
          // Navigate to the field's step if needed, simplified here
          setServerError(`Duplicate entry detected for ${result.field === 'collegeEmail' ? 'email' : 'roll number'}`);
        } else {
          setServerError(result.error || "Failed to register. Please try again.");
        }
        return;
      }
      
      setSuccessData({ id: result.participantId });
    } catch (e) {
      setServerError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <Panel className="max-w-md w-full p-8 text-center border-accent-500/50 shadow-[0_0_30px_rgba(0,255,156,0.1)]">
        <h2 className="text-2xl font-mono text-accent-500 uppercase tracking-widest mb-4">Access Granted</h2>
        <div className="font-mono text-sm text-text-muted mb-8">Registration Complete</div>
        
        <div className="bg-bg-base border border-accent-500/30 p-6 mb-8 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-500"></div>
          
          <div className="text-xs text-text-metallic uppercase mb-2">Participant ID</div>
          <div className="text-3xl text-text-primary tracking-widest">{successData.id}</div>
        </div>
        
        <p className="text-sm text-text-muted mb-8">
          Save this ID. It is your only proof of registration. Check the rule book for event instructions.
        </p>
      </Panel>
    );
  }

  return (
    <Panel className="max-w-xl w-full p-6 sm:p-10 relative overflow-hidden">
      {/* Progress */}
      <div className="flex gap-2 mb-10">
        {steps.map((step, idx) => (
          <div key={step} className="flex-1">
            <div className={`h-1 mb-2 transition-colors ${idx <= currentStep ? "bg-accent-500" : "bg-text-muted/20"}`}></div>
            <div className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider ${idx <= currentStep ? "text-accent-500" : "text-text-muted/50"}`}>
              {step}
            </div>
          </div>
        ))}
      </div>

      {serverError && (
        <div className="mb-6 p-4 border border-warn-500/50 bg-warn-500/10 text-warn-500 font-mono text-sm">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-4">
                <div className="bg-warn-500/10 border-l-2 border-warn-500 p-3 mb-4 text-xs font-mono text-warn-500">
                  <span className="font-bold">CRITICAL:</span> Ensure your Email and Phone Number are 100% correct. This is our ONLY method of communication for screening and final selection.
                </div>
                <Field label="Full Name" error={errors.fullName?.message}>
                  <Input {...register("fullName")} placeholder="John Doe" />
                </Field>
                <Field label="College Email" error={errors.collegeEmail?.message}>
                  <Input {...register("collegeEmail")} type="email" placeholder="student@glbitm.ac.in" />
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Roll/Admission No." error={errors.rollNumber?.message}>
                    <Input {...register("rollNumber")} placeholder="2101920..." />
                  </Field>
                  <Field label="Phone Number" error={errors.phoneNumber?.message}>
                    <Input {...register("phoneNumber")} placeholder="9876543210" />
                  </Field>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Branch" error={errors.branch?.message}>
                    <select {...register("branch")} className="flex h-10 w-full rounded-none border border-text-muted/30 bg-bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-500">
                      <option value="">Select Branch...</option>
                      {["CSE", "CSE-H", "CSE-AI", "CSE-AIML", "CSDS", "IT", "ECE", "ME", "EEE", "AI_DS", "BCA", "MCA", "MBA", "OTHER"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                  {selectedBranch === "OTHER" && (
                    <Field label="Specify Branch" error={errors.otherBranch?.message}>
                      <Input {...register("otherBranch")} placeholder="e.g. BTECH-BT" className="uppercase" />
                    </Field>
                  )}
                  <Field label="Year" error={errors.year?.message}>
                    <select {...register("year")} className="flex h-10 w-full rounded-none border border-text-muted/30 bg-bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-500">
                      <option value="">Select Year...</option>
                      {["1", "2", "3", "4"].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Section (Optional)" error={errors.section?.message}>
                  <Input {...register("section")} placeholder="e.g. A" />
                </Field>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-4">
                <Field label="Programming Experience" error={errors.programmingExperience?.message}>
                  <select {...register("programmingExperience")} className="flex h-10 w-full rounded-none border border-text-muted/30 bg-bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-500">
                    <option value="">Select Level...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </Field>
                <Field label="Preferred Language (for CP Arena)" error={errors.preferredLanguage?.message}>
                  <select {...register("preferredLanguage")} className="flex h-10 w-full rounded-none border border-text-muted/30 bg-bg-surface px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-500">
                    <option value="">Select Language...</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </Field>
                <Field label="GitHub Profile URL" error={errors.githubUrl?.message}>
                  <Input {...register("githubUrl")} placeholder="https://github.com/..." />
                </Field>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-6">
                <div className="p-4 border border-text-muted/20 bg-bg-base/50 text-sm text-text-muted">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>I confirm that all provided details are accurate.</li>
                    <li>I understand this is an offline event at GLBITM.</li>
                    <li>I agree to the &quot;No Google, No AI&quot; rule during the event.</li>
                    <li>The organizers hold the right to disqualify me at any time if found violating any rules.</li>
                    <li>There may be a screening round if the number of registrations exceeds a certain threshold.</li>
                  </ul>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register("consentGiven")} className="mt-1 w-4 h-4 rounded-sm border-text-muted/30 bg-bg-surface accent-accent-500" />
                  <span className="text-sm text-text-primary">I accept the terms and request access.</span>
                </label>
                {errors.consentGiven?.message && <div className="text-warn-500 text-xs font-mono">{errors.consentGiven.message}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-between">
          {currentStep > 0 ? (
            <Button type="button" variant="ghost" onClick={prevStep} disabled={isSubmitting}>
              ← Back
            </Button>
          ) : <div></div>}
          
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next →
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Submit"}
            </Button>
          )}
        </div>
      </form>
    </Panel>
  );
}

function Field({ label, error, children }: { label: string, error?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs uppercase text-text-muted tracking-wider">{label}</label>
      {children}
      {error && <span className="text-warn-500 text-xs font-mono">{error}</span>}
    </div>
  );
}
