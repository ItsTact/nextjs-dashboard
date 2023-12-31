import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { noto_sans } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Home | Lexington Sprouts</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
        <link href="styles.css" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="images/logo.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </head>
      <body>
        <div className="container">
          <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="light">
            <div className="container">
              <a className="navbar-brand animate__animated animate__bounceIn" href="index.html">
                <img src="images/logo.png" width="32px" alt="LS" className="d-inline-block align-text-middle my-auto"/>
                Lexington Sprouts
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav my-auto" align="right">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="programs.html" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      Programs
                      <i className="fa fa-heart">↓</i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="programs/science-outdoors.html">Science Outdoors (SO)</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="programs/summer-science-seminars.html">Summer Science Seminars (3S)</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="programs/slice-of-art.html">Slice of Art (SOA)</a>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <a className="dropdown-item" href="programs/art-competition.html">Art Competition Fall 2023</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="registration.html">Registration</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="schedule.html">Schedule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="faq.html">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact-and-about.html">Contact and About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      Past Events
                      <i className="fa fa-heart">↓</i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 2: SO 2022</a>
                      </li>
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 1: SO 2021</a>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 2: 3S 2022</a>
                      </li>
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 1: 3S 2021</a>
                      </li>
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 0: 3S 2020</a>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <a className="dropdown-item disabled" href="#">Season 1: SOA 2022</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="page-container">
          <div className="container body-container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card-body">
                  <h2 className="card-title animate__animated animate__bounceIn"><strong>Fun Summer Learning.</strong></h2>
                  <p className="card-text animate__animated animate__bounceInLeft">Did we get your attention?</p>
                  <a href="programs.html" className="btn btn-primary headShakeHover">You got my attention!</a>
                </div>
              </div>
              <div className="col-lg-8 mt-5">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <img src="images/so_title.png" className="d-block" align="center" alt="SO"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5><a className="plainurl text-white" href="programs.html#scienceoutdoors">Science Outdoors</a></h5>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                      <img src="images/3s_title.png" className="d-block" alt="3S"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5><a className="plainurl text-white" href="programs.html#summerscienceseminars.html">Summer Science Seminars</a></h5>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                      <img src="images/soa_title.jpg" className="d-block" alt="SoA"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5><a className="plainurl text-white" href="programs.html#sliceofart">Slice of Art</a></h5>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <br/><br/>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="card so">
                  <div className="card-body">
                    <h5 className="card-title"><a href="programs.html#scienceoutdoors">Science Outdoors</a></h5>
                    <p className="card-text">A <em>free</em> summer program to introduce incoming middle schoolers to various STEM subjects through introductory classes</p>
                    <a href="programs.html#scienceoutdoors" className="btn btn-primary pulseHover">Sign up!</a>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4">
                <div className="card _3s">
                  <div className="card-body">
                    <h5 className="card-title"><a href="programs.html#summerscienceseminars">Summer Science Seminars</a></h5>
                    <p className="card-text">Classes, lectures, and office hours, all breaking down complex scientific topics into digestible material for all interested students</p>
                    <a href="programs.html#summerscienceseminars" className="btn btn-success pulseHover">Sign up!</a>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4">
                <div className="card soa">
                  <div className="card-body">
                    <h5 className="card-title"><a href="programs.html#sliceofart">Slice of Art</a></h5>
                    <p className="card-text">An introductory course to the basics of art, fostering ideas and processes, and embracing imagination</p>
                    <a href="programs.html#sliceofart" className="btn btn-danger pulseHover">Sign up!</a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="text-center">
              <strong>
                Website last updated <a href="#" data-bs-toggle="tooltip" data-bs-title="12:14">October 8th, 2023</a>
              </strong>
              <br/>
              Note: website also being revamped right now. Please be patient as information is in the process of changing. Email us if you have any questions.
            </div>
            <br/>
            <div className="card text-center">
              List of things that will be added shortly in the coming future:
              <ul>
                <li>Specific topics for SO</li>
                <li>Explanation of our mission and goals</li>
                <hr/>
                <li>Better website design (using React instead of dry markup)</li>
                <li>Eventual porting of old websites to new ones</li>
              </ul>
            </div>
          </div>

          <footer className="footer">
          <div className="container">
            <div className="row mt-5">
              <div className="card footercol col-lg-4 leftmargin">
                <a href="index.html" className="plainurl navbar-brand navbar-brand-footer">
                  <img src="images/invert_logo.png" width="32px" alt="LS" className="d-inline-block"/>
                  Lexington Sprouts
                </a>
              </div>
              <div className="card footercol col-lg-1">
                <p className="text-start"><a className="plainurl" href="contact-and-about.html#about">About</a></p>
                <p className="text-start"><a className="plainurl" href="programs.html">Programs</a></p>
                <p className="text-start"><a className="plainurl" href="registration.html">Register</a></p>
                <p className="text-start"><a className="plainurl" href="contact-and-about.html#contact">Contact</a></p>
                <p className="text-start"><a className="plainurl" href="faq.html">FAQ</a></p>
                <p className="text-start"><a className="plainurl" href="42.html">42</a></p>
              </div>
              <div className="card footercol col-lg-3">
                <a className="underline" href="mailto:lexingtonsprouts@gmail.com">lexingtonsprouts@gmail.com</a>
              </div>
              <div className="card footercol col-lg-4 rightmargin">
                <p className="copyright text-center">
                  © Copyright 2023, Lexington Sprouts
                  <br/>
                  Website hand-made with love by Owen<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">.</a>
                  <br/>
                  Thanks to <a href="getbootstrap.com">Bootstrap</a> and <a href="https://animate.style/">Daniel Eden</a> for the various backends used
                </p>
              </div>
            </div>
          </div>
        </footer>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
      </body>
    </html>
    </>
    // <main className="flex min-h-screen flex-col p-6">
    //   <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    //     { <AcmeLogo />}
    //   </div>
    //   <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
    //     <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
    //       <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
    //       <div className={styles.shape}></div>
    //       <p className={`${noto_sans.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
    //         <strong>Welcome to Acme.</strong> This is the example for the{' '}
    //         <a href="https://nextjs.org/learn/" className="text-blue-500">
    //           Next.js Learn Course
    //         </a>
    //         , brought to you by Vercel.
    //       </p>
    //       <Link
    //         href="/login"
    //         className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    //       >
    //         <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
    //       </Link>
    //     </div>
    //     <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
    //     <Image src="/hero-desktop.png" width={1000} height={760} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version"/>
    //     <Image src="/hero-mobile.png" width={560} height={620} className="block md:hidden" alt="Screenshots of the dashboard project showing mobile version"/>
    //     </div>
    //   </div>
    // </main>
  );
}
