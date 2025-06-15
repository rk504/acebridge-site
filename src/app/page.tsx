import Link from 'next/link'

    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Learn by Playing with Ace Bridge
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Try a Free, No-Commitment Demo Lesson
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/contact"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Schedule a Free Lesson
        </Link>
      </div>
    </div>
  

import Image from "next/image"

    <div className="relative bg-[#3b5998] text-white">
      <div className="container mx-auto py-12 px-4 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            At Ace Bridge, you'll sharpen your bridge skills while having fun.
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Gain confidence the Ace Bridge Way: Less Lectures, More Playing Bridge.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/playing-cards.png"
              alt="Bridge playing cards"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  


"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Free Demo Lesson</CardTitle>
            <CardDescription className="text-center">
              Interested in a complimentary first lesson? Contact us directly!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-6">
            <p className="mb-6">
              Click below to email Reese and schedule your free demo lesson.
              Please include a time that works best for your free demo.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  


<section className="py-16 px-4 bg-[#3b5998] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a Complimentary Introductory Lesson?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Share your email below to learn more about lessons with Ace Bridge.
        </p>
       
      </div>
    </section>