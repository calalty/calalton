import { contactFields } from '@/app/constants';
import { ActionButton } from '@/components/ui/action-button';
import { SectionHeader } from '@/components/ui/section-header';
import { Send } from 'lucide-react';
import Image from 'next/image';

export const ContactSection = () => (
  <section className="py-6 px-4 bg-gray-50 rounded-lg relative">
    <SectionHeader title="Contact Me" />

    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          Let&apos;s build something clever
        </h2>
        <p className="text-gray-600 mb-6">
          Have a project in mind? Whether you want to discuss an opportunity or
          just have a conversation about technology, feel free to reach out.
        </p>

        <Image
          className="absolute bottom-0 left-1/12"
          src="/contact.png"
          width={250}
          height={250}
          alt=""
        />
      </div>

      <div className="space-y-5">
        {contactFields.map(
          ({
            id,
            label,
            placeholder,
            type,
            Component,
            additionalClassName,
          }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <Component
                id={id}
                placeholder={placeholder}
                type={type}
                className={`border-gray-200 focus-visible:ring-gray-500 ${additionalClassName}`}
              />
            </div>
          )
        )}

        <ActionButton className="w-full" icon={<Send className="h-4 w-4" />}>
          Send Message
        </ActionButton>
      </div>
    </div>
  </section>
);
