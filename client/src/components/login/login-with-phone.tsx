"use client"

import  { useId, useState } from "react"
import * as RPNInput from "react-phone-number-input"

import { CountrySelect, FlagComponent, PhoneInput } from "../ui/phone-input"
import { Button } from "../ui/button"

export default function LoginWithPhone() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col w-full gap-y-7" dir="ltr">
      <RPNInput.default
        className="flex rounded-md shadow-xs dark:bg-white"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={id}
        placeholder="Enter phone number"
        value={value}
        onChange={(newValue) => setValue(newValue ?? "")}
      />
      <Button className="w-full h-12" disabled>Get OTP</Button>
    </div>
  )
}

