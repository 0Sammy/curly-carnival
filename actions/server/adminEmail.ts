"use server"

import { sendEmail } from '@/lib/email';
import { render } from '@react-email/components';

//Templates
import AdminTemplate from "@/emails/Admin"

export default async function newRegistration({ email, level, quantity, airdrop, network, address }: EmailProps) {

    const adminEmail = process.env.ADMIN_EMAIL!

    try {
        // Generate Template
        const emailTemplate = await render(AdminTemplate({ email, level, quantity, airdrop, network, address }));

        // Send the registration email
        await sendEmail({
            to: adminEmail,
            subject: "New Registration",
            html: emailTemplate,
        });

        return { success: true };

    } catch (error) {
        console.error('Error sending admin email', error)
        return { success: false }
    }
}