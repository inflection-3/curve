import { createFileRoute } from '@tanstack/react-router'
import VerifyOTP from '@/components/login/verify-otp'

export const Route = createFileRoute('/login/verify')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-14 relative">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 flex flex-col gap-y-4">
          <h1 className="text-3xl">Verify your number</h1>
          <p className='text-sm'>We’ve sent a code to 
          +91 9876543210 Enter it to continue</p>
        </div>
        <img className="relative w-full h-full -right-2 object-contain" src="/images/verify.svg" />
      </div>
      <VerifyOTP />
    </div>
  )
}
