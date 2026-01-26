---
sidebar_position: 3
---

# Two-Factor Authentication

TroupeIT supports two methods of two-factor authentication (2FA) for additional account security.

## TOTP (Authenticator App)

Use an authenticator app like Google Authenticator, Authy, or 1Password to generate time-based codes.

### To Enable TOTP

1. Go to **Settings** → **MFA** (Multi-Factor Authentication)
2. Click **Enable TOTP**
3. Scan the QR code with your authenticator app
4. Enter the 6-digit code to verify
5. Save your backup codes in a secure location

:::warning Important
Save your backup codes! If you lose access to your authenticator app, you'll need these codes to recover your account.
:::

## Passkeys (WebAuthn)

Use biometric authentication (Touch ID, Face ID, Windows Hello) or a hardware security key (like YubiKey) for passwordless 2FA.

### To Add a Passkey

1. Go to **Settings** → **MFA**
2. Click **Add Passkey**
3. Follow your browser's prompts to register your authenticator
4. Give your passkey a nickname (e.g., "MacBook Touch ID")

## Using Multiple Methods

You can have multiple passkeys registered and can use either TOTP or passkeys for authentication. If you have both enabled, you'll be able to choose which method to use when logging in.
