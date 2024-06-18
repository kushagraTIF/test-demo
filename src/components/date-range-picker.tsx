"use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/libs/utils";
import { Separator } from "@radix-ui/themes";
import { IoCalendar } from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { Badge } from "./badge";
import FormLabel from "./FormLabel";
import { Button } from "./buttonNew";

export function CalendarDateRangePicker({
  className,
  onRangeChange,
  title,
  value,
  label,
}: React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  label?: string;
  onRangeChange: (value?: DateRange) => void;
  title: string;
  value: DateRange;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      {label && (
        <FormLabel
          className={cn("text-sm font-medium text-[#12151C] ", "!mb-0")}
        >
          {label}
        </FormLabel>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant='outline'
            className={cn(
              "justify-between border-dashed text-left font-medium"
            )}
          >
            {/* <CalendarIcon /> */}

            <div className='flex items-center gap-2'>
              <span className='text-sm font-normal text-[#6A6E76]'>
                {title}
              </span>
              {(value?.from || value?.to) && (
                <>
                  <Separator orientation='vertical' className='mx-2 h-4' />
                  <Badge
                    variant='secondary'
                    className='rounded-sm px-1 font-normal'
                  >
                    {value?.from ? (
                      value?.to ? (
                        <>
                          {format(value.from, "LLL dd, y")} -{" "}
                          {format(value.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(value.from, "LLL dd, y")
                      )
                    ) : null}
                  </Badge>
                  <Button
                    variant='ghost'
                    className='h-4 w-4'
                    // size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRangeChange();
                    }}
                  >
                    <IoMdClose size={13} />
                  </Button>
                </>
              )}
            </div>
            <IoCalendar className='h-4 w-4 text-[#6A6E76]' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='end'>
          <p className='mx-5 my-2 text-sm font-semibold'>{title}</p>
          <Separator />
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={value?.from}
            selected={value}
            onSelect={(range) => {
              onRangeChange(range);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
