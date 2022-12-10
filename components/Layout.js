import { signOut, useSession } from 'next-auth/react'
import { Menu } from '@headlessui/react'
import DropdownLink from './DropdownLink'
import Cookies from 'js-cookie'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import Link from 'next/link'
export default function Layout({ title, children }) {
  const { status, data: session } = useSession()

  const logoutClickHandler = () => {
    Cookies.remove('cart')
    //dispatch({ type: 'CART_RESET' })
    signOut({ callbackUrl: '/login' })
  }

  return (
    <>
      <Head>
        <title>{title ? title + ' - Bookweb' : 'Bookweb'}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/" className="text-lg font-bold">
              bookweb
            </Link>

            <div>
              <Link href="/myapp" className="p-2">
                개인 포트폴리오
              </Link>

              <Link href="/review" className="p-2">
                review
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-2">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 bookweb</p>
        </footer>
      </div>
    </>
  )
}
