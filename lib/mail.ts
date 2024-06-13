import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_VERIFICATION_KEY)

const domain = process.env.NEXT_PUBLIC_FRONTEND_DEV_URL

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmationLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: 'Vendorspot Notification <admin@vendorspot.ng>',
        to: email,
        subject: 'Verify your email address',
        html: `<p>Please click the link below to verify your email address: <a href="${confirmationLink}">${confirmationLink}</a></p>`
    })
}


export const sendResetPasswordEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: 'admin@vendorspot.ng',
        to: email,
        subject: 'Reset Password',
        html: `<p>Please click : <a href="${resetLink}">here</a> below to verify your email address> </p>`
    })
}