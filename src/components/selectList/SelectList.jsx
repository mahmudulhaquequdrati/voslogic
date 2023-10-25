import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const people = [{ name: "Department" }, { name: "Agent" }];

export default function SelectList() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full rounded-lg bg-transparent border-[1px] border-[#0070D2] px-[18px] py-[10px] text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
            <span className="block truncate text-[#9CA3AF]  font-Tw text-[18px] italic">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="9"
                viewBox="0 0 18 9"
                fill="none"
              >
                <path d="M18 9L9 0L0 9L18 9Z" fill="white" />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#1d67a8] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-900 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-white ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 "></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
