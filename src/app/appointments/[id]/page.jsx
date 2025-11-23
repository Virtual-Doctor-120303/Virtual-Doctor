import Appoint_Booking_Form from '@/Components/AllForm/Appoint_Booking_Form';
import React from 'react'

export default async function AppointmentPage({ params }) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/doctor/${params.id}`);
  const data = await res.json();

  return (
    <div className='mt-28'>
      <Appoint_Booking_Form data={data}></Appoint_Booking_Form>
    </div>
  )
}
