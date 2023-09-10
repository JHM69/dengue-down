import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { useAuthState } from '../contexts/UserContext';
import { SignInButton } from '../domain/auth/SignInButton';
import { SignOutButton } from '../domain/auth/SignOutButton';
import HealthCare from '../screens/healthcare';
import Vector from '../screens/Vector';
import Blood from '../screens/Blood';
import Indivis from '../screens/indivisual';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

function Layout() {
  const { state } = useAuthState();

  console.log(state)

  
  return (
    <div>
     <header className="bg-gray-800 py-2 flex justify-between">
        <div className="container mx-auto text-white pl-4">
            <a href="/"><h1 className="text-2xl font-bold">Dengue Down - একটি ডিজিটাল ডেঙ্গু নিয়ন্ত্রণ সমাধান</h1></a>
        </div>
        
        <div className="mt-4 grid gap-2">
        {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
       
      </div>
 
    </header>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
        {
          path: '/healthcare',
          element: <HealthCare />,
        },
        {
          path: '/vector',
          element: <Vector />,
        },
        {
          path: '/blood',
          element: <Blood />,
        },
        {
          path: '/invisual',
          element: <Indivis />,
        }
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
