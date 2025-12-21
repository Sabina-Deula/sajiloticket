import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router";
import { Textarea } from "@/components/ui/textarea";

const footerSections = [
  {
    title: "Sajilo Ticket",
    links: [
      {
        title: "Home",
        href: "#",
      },
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "",
        href: "#",
      },
    ],
  },
  {
    title: "Customer Support",
    links: [
      {
        title: "Phone: +977 9800000000",
        href: "#",
      },
      {
        title: "Email: sajiloticket@gmail.com",
        href: "#",
      },
      {
        title: "Help centre",
        href: "#",
      },
      {
        title: "Tutorials",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
];

export default function Bottom() {
  return (
    <div>
      <div className=" flex flex-col">
        <div className="" />

        <div className="grow bg-muted" />
        <footer className="border-t">
          <div className="max-w-(--breakpoint-xl) mx-auto">
            <div className=" py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
              <div className="col-span-full xl:col-span-2">
                <img
                  className="bg-gray-200 shadow-gray-400 "
                  src="/src/assets/logo.png"
                  alt=""
                />

                <p className="mt-4 text-muted-foreground">
                  Book your tickets in seconds and travel without stress.
                  Simple, fast, and always reliable.
                </p>
              </div>

              {footerSections.map(({ title, links }) => (
                <div key={title}>
                  <h6 className="font-medium">{title}</h6>
                  <ul className="mt-6 space-y-4">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Subscribe Newsletter */}
              <div className="gap-40 col-span-2">
                <h6 className="font-medium">Get your tickets book now.</h6>
                <form className="mt-6 flex flex-col items-start gap-4">
                  <Input
                    type="username"
                    placeholder="Enter your Full Name"
                    className="grow max-w-64"
                  />

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="grow max-w-64"
                  />
                  <div className="w-full max-w-xs space-y-2">
                    <Label>Enter your query here.</Label>
                    <Textarea placeholder="what's on your mind" />
                    <p className="text-muted-foreground text-xs">
                      Just say what you want to know.
                    </p>
                  </div>
                  <Button className="mt-2">Submit</Button>
                </form>
              </div>
            </div>
            <Separator />
            <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
              {/* Copyright */}
              <span className="text-muted-foreground">
                &copy; {new Date().getFullYear()}{" "}
                <Link href="/" target="_blank">
                  Sajilo Ticket
                </Link>
                . All rights reserved.
              </span>

              <div className="flex items-center gap-5 text-muted-foreground">
                <Link href="#" target="_blank">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
