'use client'
import React from 'react'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'


const WidgetGrid = () =>
{
  const count = useAppSelector(state => state.counter.count)
  return (
    <>
      <SimpleWidget label='Counter' title={`${count}`} href='/dashboard/counter' subTitle='Productos agregados' icon={<IoCartOutline size={70} className='text-blue-600' />} />
    </>
  )
}

export default WidgetGrid