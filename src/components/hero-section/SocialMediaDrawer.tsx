/**
 * SocialMediaDrawer Component
 *
 * A modal drawer component that displays social media profiles and content
 * within an iPhone-like mobile frame. Supports different types of social
 * media layouts including Instagram, LinkedIn, and custom displays.
 */

"use client";

import React from "react";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "../ui/sheet";

interface SocialMediaDrawerProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  type?: "default" | "instagram" | "linkedin" | "avanzadi";
}

const SocialMediaDrawer = ({
  title,
  description,
  url,
  icon,
  type = "default",
}: SocialMediaDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:translate-y-[-3px] hover:scale-110">
          {icon}
        </div>
      </SheetTrigger>
      <SheetContent className="w-[350px] sm:w-[400px] bg-background/80 backdrop-blur-lg border border-white/10">
        <SheetHeader>
          <SheetTitle className="text-xl">{title}</SheetTitle>
          <SheetDescription className="text-foreground/70">
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          {/* iPhone 16 Pro mockup container */}
          <div className="mx-auto w-[300px] h-[600px] bg-black rounded-[45px] p-3 border-[14px] border-gray-800 relative shadow-xl">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-8 bg-black rounded-b-3xl z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black border border-gray-700 mr-12"></div>
              <div className="w-4 h-4 rounded-full bg-black border border-gray-700"></div>
            </div>

            {/* Screen content */}
            <div className="w-full h-full rounded-[32px] overflow-hidden bg-white/5 relative flex flex-col">
              {/* Status bar */}
              <div className="h-8 w-full bg-black/30 backdrop-blur-sm flex items-center justify-between px-6 text-[10px] text-white">
                <span>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                </div>
              </div>

              {/* Main content based on type */}
              {type === "instagram" ? (
                <div className="flex-1 overflow-hidden">
                  {/* Instagram header */}
                  <div className="h-12 bg-black flex items-center justify-between px-4 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      Instagram
                    </span>
                    <div className="flex items-center space-x-4">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Instagram content */}
                  <div className="bg-gradient-to-b from-purple-900/20 to-rose-900/20 h-full p-2">
                    <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                      <img
                        src="/images/pfOmar.jpg"
                        alt="Instagram Preview"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-purple-600"></div>
                          <span className="text-white text-sm font-medium">
                            omarsomoza1
                          </span>
                        </div>
                        <p className="text-white/80 text-xs">
                          Transformando desafíos empresariales en soluciones
                          digitales exitosas. #DigitalTransformation #Leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === "linkedin" ? (
                <div className="flex-1 overflow-hidden">
                  {/* LinkedIn header */}
                  <div className="h-12 bg-[#0A66C2] flex items-center justify-between px-3 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      LinkedIn
                    </span>
                    <div className="flex items-center space-x-4">
                      <Linkedin size={18} className="text-white" />
                    </div>
                  </div>

                  {/* LinkedIn content */}
                  <div className="bg-white h-full overflow-y-auto">
                    {/* Profile cover */}
                    <div className="h-16 bg-gradient-to-r from-blue-900 to-blue-600"></div>

                    {/* Profile header */}
                    <div className="relative px-3">
                      <div className="absolute -top-8 left-3 w-16 h-16 rounded-full border-4 border-white overflow-hidden">
                        <img
                          src="/images/pfOmar.jpg"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-10 pb-3">
                        <h3 className="text-black font-bold text-lg">
                          Javier Reyes
                        </h3>
                        <p className="text-gray-600 text-xs">
                          Project Director & Technical Leader
                        </p>
                        <p className="text-gray-500 text-xs">
                          Founder at Avanzadi
                        </p>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <span>Buenos Aires, Argentina</span>
                          <span className="mx-1">•</span>
                          <span className="text-[#0A66C2] font-medium">
                            500+ connections
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 mt-3">
                          <div className="px-4 py-1 rounded bg-[#0A66C2] text-white text-xs font-medium">
                            Connect
                          </div>
                          <div className="px-4 py-1 rounded border border-[#0A66C2] text-[#0A66C2] text-xs font-medium">
                            Message
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <div className="mt-2 px-3 py-2 border-t border-gray-200">
                      <h4 className="text-black font-bold text-sm">About</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Project Director & Technical Leader with a solid
                        background in digital transformation. Expert in leading
                        technical teams and delivering high-impact projects.
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="mt-2 px-3 py-2 border-t border-gray-200">
                      <h4 className="text-black font-bold text-sm">
                        Experience
                      </h4>
                      <div className="mt-2">
                        <div className="flex">
                          <div className="w-8 h-8 bg-gray-100 rounded flex-shrink-0"></div>
                          <div className="ml-2">
                            <p className="text-black font-medium text-xs">
                              Founder
                            </p>
                            <p className="text-gray-600 text-xs">Avanzadi</p>
                            <p className="text-gray-500 text-[10px]">
                              2019 - Present
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === "avanzadi" ? (
                <div className="flex-1 overflow-hidden">
                  {/* Avanzadi header */}
                  <div className="h-12 bg-black flex items-center justify-between px-3 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      Avanzadi
                    </span>
                    <div className="flex items-center space-x-4">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Avanzadi content - scaled iframe */}
                  <div className="flex-1 overflow-hidden bg-white">
                    <div className="w-full h-full transform scale-[0.40] origin-top-left">
                      <iframe
                        src={url}
                        className="w-[700px] h-[1200px] border-none"
                        title={title}
                        scrolling="no"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={url}
                  className="flex-1 w-full border-none"
                  title={title}
                />
              )}

              {/* iPhone bottom line */}
              <div className="h-[5px] mt-auto mx-auto w-[40%] bg-gray-700 rounded-full"></div>

              {/* iPhone gesture bar */}
              <div className="h-8 bg-transparent backdrop-blur-sm flex items-center justify-around">
                <div className="w-30 h-1 bg-white/80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Abrir en nueva pestaña</span>
            </a>
            <SheetClose className="px-4 py-2 rounded-md bg-background/30 text-foreground/70 hover:bg-background/50 transition-colors">
              Cerrar
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SocialMediaDrawer;
