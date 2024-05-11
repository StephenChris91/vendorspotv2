import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmationLink = `${process.env.FRONTEND_DEV_URL}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Verify your email address',
        html: `<p>Please click the link below to verify your email address: <a href="${confirmationLink}">${confirmationLink}</a></p>`
    })
}


export const sendResetPasswordEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `${process.env.FRONTEND_DEV_URL}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Reset Password',
        html: `<p>Please click : <a href="${resetLink}">here</a> below to verify your email address> </p>`
    })
}