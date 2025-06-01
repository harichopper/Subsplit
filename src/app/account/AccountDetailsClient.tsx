"use client";
import { useEffect, useState } from 'react';

import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit3, ShieldCheck, CreditCardIcon, Bell } from "lucide-react";

// TODO: Define a type for user's account data (plan, payment methods, etc.)
// type UserAccountData = {
//   plan: string;
//   status: string;
//   paymentMethod: { type: string; details: string } | null;
//   upiId: string | null;
//   // Add other relevant fields
// };

export default function AccountDetailsClient() {
  const { user } = useAuth();
  // TODO: Add state to hold fetched user account data
  // const [accountData, setAccountData] = useState<UserAccountData | null>(null);
  // TODO: Add state for loading and error handling
  // const [isLoading, setIsLoading] = useState(true);

  if (!user) {
    // This should ideally not be reached if ProtectedPage works correctly
    return <div className="container mx-auto px-4 py-8 text-center">User not found.</div>;
  }

  const userInitials = user.displayName
    ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
    : (user.email ? user.email[0].toUpperCase() : '?');

  // TODO: Implement data fetching logic here
  // useEffect(() => {
  //   const fetchAccountData = async () => {
  //     try {
  //       // Replace with actual API call to fetch user account data
  //       // const data = await api.getUserAccountData(user.uid);
  //       // setAccountData(data);
  //     } catch (error) {
  //       // Handle error
  //     } finally {
  //       // setIsLoading(false);
  //     }};
  //   if (user) {
  //     fetchAccountData();
  //   }
  // }, [user]); // Depend on user to refetch if user changes

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-10">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Account Management</h1>
        <p className="font-body text-muted-foreground mt-2">Manage your profile, subscription, and billing information.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-1 rounded-xl shadow-lg">
          <CardHeader className="items-center text-center p-6">
            <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
              <AvatarFallback className="text-3xl font-headline">{userInitials}</AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-2xl">{user.displayName || "User Name"}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Subscription Details */}
          <Card className="rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <ShieldCheck className="mr-3 h-6 w-6 text-primary" />
                Subscription Details
              </CardTitle>
              <CardDescription>Overview of your current plan and usage.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Separator />
                <Button variant="secondary" className="w-full sm:w-auto">Manage Subscription</Button>
              </div>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card className="rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-8">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <CreditCardIcon className="mr-3 h-6 w-6 text-primary" />
                Billing Information
              </CardTitle>
              <CardDescription>Manage payment methods and view invoices.</CardDescription>
            </CardHeader>
            <CardContent className="sm:col-span-2">
              {/* Split content into two columns if needed, here keeping it simple */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                  {/* TODO: Display dynamic plan data */}
 <h3 className="font-semibold text-foreground">Current Plan:</h3>
 <p className="text-muted-foreground">{/* {accountData?.plan || 'Loading...'} */"Pro Access (Placeholder)"}</p>
                  </div>
                  <div>
                  {/* TODO: Display dynamic status data */}
 <h3 className="font-semibold text-foreground">Status:</h3>
 <p className="text-green-600">{/* {accountData?.status || 'Loading...'} */"Active (Placeholder)"}</p>
                  </div>
                  <div>
                  {/* TODO: Display dynamic payment method data */}
                    <h3 className="font-semibold text-foreground">Payment Method:</h3>
                    {/* {accountData?.paymentMethod ? (
                      <p className="text-muted-foreground">{`${accountData.paymentMethod.type} ${accountData.paymentMethod.details}`}</p>
                    ) : (
                      <p className="text-muted-foreground">Loading...</p>
                    )} */}
                    <p className="text-muted-foreground">Visa **** **** **** 1234 (Placeholder)</p>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-4">
                      <Button variant="secondary" className="flex-grow sm:flex-grow-0">Update Payment Method</Button>
                      <Button variant="outline" className="flex-grow sm:flex-grow-0">View Invoices</Button>
                  </div>
                </div>

                {/* New UPI Payment Details Card */}
                <div className="space-y-4">
                  <Card className="rounded-xl shadow-inner bg-secondary/10">
                     <CardHeader>
                       <CardTitle className="font-headline text-xl">UPI Payment Details</CardTitle>
                       <CardDescription>Manage your UPI payment information.</CardDescription>
                     </CardHeader>
                     <CardContent>
                       <div className="space-y-4">
                         <div>
                           <h3 className="font-semibold text-foreground">UPI ID:</h3>
                           {/* TODO: Display dynamic UPI ID data */}
                           {/* <p className="text-muted-foreground">{accountData?.upiId || 'Not set'}</p> */}
                           <p className="text-muted-foreground">your_upi_id@bank (Placeholder)</p>
                         </div>

                         {/* TODO: Add Google Pay button here */}
                         <Button variant="default">Pay with Google Pay</Button>
                         {/* TODO: Integrate Google Pay API to initiate payment on button click */}
                         {/* Add UPI payment history or management options here */}
                       </div>
                     </CardContent>
                   </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Notification Settings */}
          <Card className="rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Bell className="mr-3 h-6 w-6 text-primary" />
                Notification Settings
              </CardTitle>
              <CardDescription>Control how you receive updates from us.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Notification settings are not yet available.</p>
               <Separator className="my-4"/>
              <Button variant="secondary" disabled>Manage Notifications</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
