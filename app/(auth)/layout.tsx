import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <h1 className='flex text-4xl mb-2'>Discord Clone</h1>
      <p className='flex mb-8'>Made by - Vaibhav Sharma </p>
      {children}
      <p className='flex text-lg mt-8'>Demo User Credentials</p>
      <p className='flex text-sm mt-2'>Email - temp@yopmail.com</p>
      <p className='flex text-sm'>Password - temp@yopmail.com</p>
    </div>
  );
};

export default AuthLayout;
