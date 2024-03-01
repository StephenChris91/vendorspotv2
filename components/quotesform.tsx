"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const formSchema = z.object({
    discription: z.string().min(2, {
        message: "Please input a discription",
    }),
    details: z.string().min(2, {
        message: "Please provide more details",
    }),
    quantity: z.string().min(1, {
        message: "Please provide a quantity",
    }),
    vendor: z.string().min(1, {
        message: "Please choose a vendor",
    }),
})

export function QuotesForm() {

        const form = useForm<z.infer<typeof formSchema>>({
                resolver: zodResolver(formSchema),
                defaultValues: {
                    discription: "",
                    details: "",
                    quantity: "",
                    vendor: "",
                },
            })
         
            // 2. Define a submit handler.
            function onSubmit(values: z.infer<typeof formSchema>) {
                // Do something with the form values.
                // ✅ This will be type-safe and validated.
                console.log(values)
            }
        
    // ...

    return (
        <div className="p-10 bg-gray-50 w-2/4 rounded-sm">
            <h3 className="mb-5">Send quote to suppliers</h3>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="discription"
                    render={({ field, fieldState, formState }) => ( // Update the type of the render function
                        <FormItem>
                            <FormControl>
                                <Input placeholder="What item you need?" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field, fieldState, formState }) => ( // Update the type of the render function
                        <FormItem>
                            <FormControl>
                            <FormControl>
                                <Textarea
                                placeholder="Type more details"
                                className="resize-none"
                                {...field}
                                />
                            </FormControl>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex gap-2">
                    <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field, fieldState, formState }) => ( // Update the type of the render function
                                <FormItem>
                                    <FormControl>
                                    <FormControl>
                                    <Input placeholder="Quantity" {...field} />
                                    </FormControl>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField
                        control={form.control}
                        name="vendor"
                        render={({ field, fieldState, formState }) => ( // Update the type of the render function
                            <FormItem>
                                <FormControl>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Pcs" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                <Button type="submit" className="bg-blue-600 shadow-none w-full">Submit</Button>
            </form>
        </Form>
        </div>
    )
}
