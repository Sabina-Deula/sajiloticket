
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon, 
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router";


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
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Events",
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
      <div className="min-h-screen flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className=" py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
            

              <p className="mt-4 text-muted-foreground">
                Book your tickets in seconds and travel without stress. Simple, fast, and always reliable.
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
            <div className="col-span-2">
              <h6 className="font-medium">Get your tickets book now.</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="grow max-w-64"
                />
                <Button>Submit</Button>
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
  )
}
