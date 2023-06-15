/////////////////////////////////////
////////////controled by state///////
/////////////////////////////////////

// import { useState, FormEvent } from 'react';
// type Contact = {
//   name: string;
//   email: string;
//   reason: string;
//   notes: string;
// };
// const fieldStyle = 'flex flex-col mb-2';
// const ContactPage = () => {
//   const [contact, setContact] = useState<Contact>({ name: '', email: '', notes: '', reason: '' });

//   function submitHandler(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     console.log('Submitted details:', contact);
//   }
//   return (
//     <div
//       className="flex flex-col py-10 max-w-md
//   mx-auto"
//     >
//       <h2
//         className="text-3xl font-bold underline
//   mb-3"
//       >
//         Contact Us
//       </h2>
//       <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
//       <form onSubmit={submitHandler}>
//         <div className={fieldStyle}>
//           <label htmlFor="name">Your name</label>
//           <input
//             type="text"
//             id="name"
//             value={contact.name}
//             onChange={(e) => setContact({ ...contact, name: e.target.value })}
//           />
//         </div>
//         <div className={fieldStyle}>
//           <label htmlFor="email">Your email address</label>
//           <input
//             type="text"
//             id="email"
//             value={contact.email}
//             onChange={(e) => setContact({ ...contact, email: e.target.value })}
//           />
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="reason">Reason you need to contact us</label>
//           <select
//             id="reason"
//             value={contact.reason}
//             onChange={(e) => setContact({ ...contact, reason: e.target.value })}
//           >
//             <option value=""></option>
//             <option value="Support">Support</option>
//             <option value="Feedback">Feedback</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="notes">Additional notes</label>
//           <textarea
//             id="notes"
//             value={contact.notes}
//             onChange={(e) => setContact({ ...contact, notes: e.target.value })}
//           />
//         </div>

//         <div className={fieldStyle}>
//           <button
//             type="submit"
//             className="mt-2 h-10 px-6 font-semibold bg-black
// text-white"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

/////////////////////////////////////
//////////uncontroled by state///////
/////////////////////////////////////

// import { FormEvent } from 'react';
// type Contact = {
//   name: string;
//   email: string;
//   reason: string;
//   notes: string;
// };
// const fieldStyle = 'flex flex-col mb-2';
// const ContactPage = () => {
//   function submitHandler(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const contact = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       reason: formData.get('reason'),
//       notes: formData.get('notes'),
//     } as Contact;
//     console.log('Submitted details:', contact);
//   }
//   return (
//     <div
//       className="flex flex-col py-10 max-w-md
//   mx-auto"
//     >
//       <h2
//         className="text-3xl font-bold underline
//   mb-3"
//       >
//         Contact Us
//       </h2>
//       <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
//       <form onSubmit={submitHandler}>
//         <div className={fieldStyle}>
//           <label htmlFor="name">Your name</label>
//           <input type="text" id="name" name="name" />
//         </div>
//         <div className={fieldStyle}>
//           <label htmlFor="email">Your email address</label>
//           <input type="text" id="email" name="email" />
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="reason">Reason you need to contact us</label>
//           <select id="reason" name="reason">
//             <option value=""></option>
//             <option value="Support">Support</option>
//             <option value="Feedback">Feedback</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="notes">Additional notes</label>
//           <textarea id="notes" name="notes" />
//         </div>

//         <div className={fieldStyle}>
//           <button
//             type="submit"
//             className="mt-2 h-10 px-6 font-semibold bg-black
// text-white"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

// /////////////////////////////////////
// //////////React router Form///////
// /////////////////////////////////////

// import { Form, ActionFunctionArgs, redirect } from 'react-router-dom';

// type Contact = {
//   name: string;
//   email: string;
//   reason: string;
//   notes: string;
// };
// const fieldStyle = 'flex flex-col mb-2';
// const ContactPage = () => {
//   return (
//     <div
//       className="flex flex-col py-10 max-w-md
//   mx-auto"
//     >
//       <h2
//         className="text-3xl font-bold underline
//   mb-3"
//       >
//         Contact Us
//       </h2>
//       <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
//       <Form method="post">
//         <div className={fieldStyle}>
//           <label htmlFor="name">Your name</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div className={fieldStyle}>
//           <label htmlFor="email">Your email address</label>
//           <input type="text" id="email" name="email" required pattern="\S+@\S+\.\S+" />
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="reason">Reason you need to contact us</label>
//           <select id="reason" name="reason" required>
//             <option value=""></option>
//             <option value="Support">Support</option>
//             <option value="Feedback">Feedback</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className={fieldStyle}>
//           <label htmlFor="notes">Additional notes</label>
//           <textarea id="notes" name="notes" />
//         </div>

//         <div className={fieldStyle}>
//           <button
//             type="submit"
//             className="mt-2 h-10 px-6 font-semibold bg-black
// text-white"
//           >
//             Submit
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ContactPage;

// export async function contactPageAction({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const contact = {
//     name: formData.get('name'),
//     email: formData.get('email'),
//     reason: formData.get('reason'),
//     notes: formData.get('notes'),
//   } as Contact;
//   console.log('Submitted details:', contact);

//   return redirect(`/thank-you/${formData.get('name')}`);
// }

/////////////////////////////////////
//////////React Hooks Form///////
/////////////////////////////////////

import { useNavigate } from 'react-router-dom';
import { useForm, FieldError } from 'react-hook-form';
import ValidationError from './ValidationError';
type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};
const fieldStyle = 'flex flex-col mb-2';
const ContactPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Contact>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const navigate = useNavigate();

  function onSubmit(contact: Contact) {
    console.log('Submitted details:', contact);
    navigate(`/thank-you/${contact.name}`);
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div
      className="flex flex-col py-10 max-w-md
  mx-auto"
    >
      <h2
        className="text-3xl font-bold underline
  mb-3"
      >
        Contact Us
      </h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'You must enter your name',
            })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'You must enter your email address',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            id="reason"
            {...register('reason', {
              required: 'You must enter the reason for contacting',
            })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
        </div>
        <div className={fieldStyle}>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black
text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
