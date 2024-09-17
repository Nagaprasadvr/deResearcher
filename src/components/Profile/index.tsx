"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileBanner } from "./ProfileBanner";

export default function ProfileComponent() {
  const handleEditClick = () => {
    // Implement edit functionality
    console.log("Edit profile clicked");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mb-20">
      <ProfileBanner
        bannerSrc="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        avatarSrc="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onEditClick={handleEditClick}
        isVerified={true}
      />

      {/* Profile Information */}
      <ProfileInfo
        name="Adela Parkson"
        username="🦒🦖TheMenageri3"
        walletAddress="CesA1PUnFh....9yz1pgDbxb"
        bio="Exploring the intersection of cryptography and blockchain to drive innovation in decentralized research. Focused on building secure, transparent, and equitable systems that empower researchers and protect intellectual property in the digital age."
        stats={{
          papers: 17,
          reviewedPapers: 9700,
          reputation: 274,
        }}
      />
      {/* Tabs */}
      <Tabs defaultValue="contributions" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contributions">Contributions</TabsTrigger>
          <TabsTrigger value="peer-reviews">Peer Reviews</TabsTrigger>
          <TabsTrigger value="paid-reads">Paid Reads</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-50 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              <th className="px-6 py-3">PAPER TITLE</th>
              <th className="px-6 py-3">AUTHORS</th>
              <th className="px-6 py-3">CREATED DATE</th>
              <th className="px-6 py-3">DOMAIN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div className="h-2 bg-zinc-200 rounded w-3/4"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2 bg-zinc-200 rounded w-1/2"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2 bg-zinc-200 rounded w-1/4"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2 bg-zinc-200 rounded w-1/3"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
