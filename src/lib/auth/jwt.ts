import { SignJWT, jwtVerify } from "jose";

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SIGNING_SECRET;
  if (!secret) {
    throw new Error("Missing env var: JWT_SIGNING_SECRET");
  }
  return new TextEncoder().encode(secret);
};

export async function signAdminToken(payload: { id: string; role: string; email: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(getJwtSecretKey());
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload as { id: string; role: string; email: string };
  } catch (error) {
    return null;
  }
}
