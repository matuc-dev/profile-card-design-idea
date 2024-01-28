'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'


const Profile = () => {

    const island = [
        {
            name: "island",
            status: "App Developer / Designer",
            bio: "私はプログラミングをすること、\n音楽を聴くことが大好きです。\n日本出身です。よろしくお願いします。"
        }
    ]

    const skills = [
        {
            first: "TypeScript",
            second: "JavaScript",
            third: "NextJS",
            four: "React",
            fifth: "Python",
            six: "Deno"
        }
    ]
    return (
        <div className='flex items-center justify-center h-screen'>
            <Card className='w-[400px] h-[500px] font-poppins'>
                <CardHeader>
                    <div className="flex justify-center">
                        <img className='w-[400px] h-[150px] object-cover mt-[-25px] absolute rounded-b-none rounded-md' src="https://cdn.dribbble.com/users/13449/screenshots/1828176/attachments/304147/Lakeside_Sunset_1920x1080.jpg" alt="" />
                        <Avatar className='size-[100px] mt-[80px]'>
                            <AvatarImage className='border rounded-full border-zinc-300' src='https://avatars.githubusercontent.com/u/113875508?v=4' />
                            <AvatarFallback className='text-3xl sm:text-4xl'>😎</AvatarFallback>
                        </Avatar>
                    </div>
                </CardHeader>
                <CardContent className='flex justify-center'>
                    {island.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col text-center gap-1">
                                <h1 className='text-2xl mt-[-15px] font-medium' >{item.name}</h1>
                                <p className='text-seco'>{item.status}</p>
                                <p className='font-sans whitespace-pre-wrap'>{item.bio}</p>
                            </div>
                        )
                    })}

                </CardContent>
                <Separator />
                <CardFooter>
                    {skills.map((data, index) => {
                        return (
                            <div className="">
                                <h2 className=' absolute mt-2'>Skills</h2>
                                <div key={index} className="grid grid-cols-4 mt-[40px] gap-2">
                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.first}
                                    </Badge>
                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.second}
                                    </Badge>
                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.third}
                                    </Badge>

                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.four}
                                    </Badge>
                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.fifth}
                                    </Badge>
                                    <Badge className='flex justify-center items-center h-[26px] rounded-md'>
                                        {data.six}
                                    </Badge>
                                </div>
                            </div>
                        )
                    })}
                </CardFooter>
            </Card>
        </div>
    )
}

export default Profile