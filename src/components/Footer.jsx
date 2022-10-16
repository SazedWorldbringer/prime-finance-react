import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          PrimeFinance
        </h1>
        <p className="py-4">
          Amet laboriosam cum cumque modi doloribus? Facere praesentium
          reprehenderit voluptates possimus voluptatum Accusamus reiciendis ea
          nihil aliquam ratione aspernatur quidem.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Analytics
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Marketing
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Commerce
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Insights
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Pricing
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Documentation
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Guides
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="">
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                About
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Blog
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Press
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Jobs
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Claim
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Policy
              </a>
            </li>
            <li className="py-2 text-sm">
              <a className="hover:text-[#00df9a]" href="/">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
