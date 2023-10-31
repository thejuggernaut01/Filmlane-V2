import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { IonIcon } from "@ionic/react";
import { reorderTwo } from "ionicons/icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-around py-4 text-white">
      <div className="flex items-center justify-around">
        <Link
          to={"/"}
          className="text-2xl font-bold text-white no-underline cursor-pointer"
        >
          {!openMenu && (
            <svg
              width="169"
              height="44"
              viewBox="0 0 169 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.66 11.392H69.54V15.312H60.72V19.988H68.364V23.908H60.72V32H56.66V11.392ZM72.8051 19.764H76.7251V32H72.8051V19.764ZM72.7211 15.424C72.7211 14.8453 72.9451 14.3693 73.3931 13.996C73.8597 13.6227 74.3544 13.436 74.8771 13.436C75.3997 13.436 75.8757 13.6227 76.3051 13.996C76.7531 14.3693 76.9771 14.8453 76.9771 15.424C76.9771 16.0027 76.7531 16.4787 76.3051 16.852C75.8757 17.2067 75.3997 17.384 74.8771 17.384C74.3544 17.384 73.8597 17.2067 73.3931 16.852C72.9451 16.4787 72.7211 16.0027 72.7211 15.424ZM80.7621 9.908H84.6821V32H80.7621V9.908ZM92.2751 19.764L92.5831 21.92L92.5271 21.752C93.0125 20.9307 93.6191 20.296 94.3471 19.848C95.0751 19.3813 95.9525 19.148 96.9791 19.148C97.6511 19.148 98.2391 19.2413 98.7431 19.428C99.2658 19.6147 99.7045 19.8947 100.059 20.268C100.414 20.6227 100.656 21.0893 100.787 21.668L100.647 21.696C101.17 20.9307 101.795 20.3147 102.523 19.848C103.27 19.3813 104.044 19.148 104.847 19.148C106.06 19.148 107.022 19.4933 107.731 20.184C108.459 20.856 108.832 21.7333 108.851 22.816V32H104.959V24.44C104.94 23.8987 104.856 23.46 104.707 23.124C104.558 22.7693 104.212 22.5733 103.671 22.536C103.036 22.536 102.495 22.76 102.047 23.208C101.618 23.6373 101.291 24.1973 101.067 24.888C100.862 25.56 100.759 26.26 100.759 26.988V32H96.8391V24.44C96.8205 23.8987 96.7178 23.46 96.5311 23.124C96.3631 22.7693 96.0085 22.5733 95.4671 22.536C94.8511 22.536 94.3285 22.76 93.8991 23.208C93.4885 23.6373 93.1711 24.188 92.9471 24.86C92.7418 25.532 92.6391 26.2227 92.6391 26.932V32H88.7191V19.764H92.2751ZM112.891 9.908H116.811V32H112.891V9.908ZM126 32.336C124.861 32.336 123.825 32.112 122.892 31.664C121.977 31.1973 121.249 30.488 120.708 29.536C120.167 28.584 119.896 27.3707 119.896 25.896C119.896 24.5147 120.176 23.32 120.736 22.312C121.296 21.304 122.033 20.5293 122.948 19.988C123.863 19.428 124.833 19.148 125.86 19.148C127.073 19.148 127.988 19.3533 128.604 19.764C129.239 20.156 129.761 20.5947 130.172 21.08L130.004 21.556L130.368 19.764H134.008V32H130.088V29.34L130.396 30.18C130.359 30.18 130.247 30.292 130.06 30.516C129.873 30.7213 129.593 30.9733 129.22 31.272C128.865 31.552 128.417 31.7947 127.876 32C127.353 32.224 126.728 32.336 126 32.336ZM127.12 29.144C127.587 29.144 128.007 29.0787 128.38 28.948C128.753 28.7987 129.08 28.5933 129.36 28.332C129.64 28.052 129.883 27.7067 130.088 27.296V24.3C129.939 23.8893 129.715 23.544 129.416 23.264C129.117 22.9653 128.763 22.7413 128.352 22.592C127.941 22.424 127.484 22.34 126.98 22.34C126.42 22.34 125.897 22.4893 125.412 22.788C124.945 23.068 124.572 23.46 124.292 23.964C124.012 24.468 123.872 25.0467 123.872 25.7C123.872 26.3533 124.021 26.9413 124.32 27.464C124.619 27.9867 125.011 28.3973 125.496 28.696C126 28.9947 126.541 29.144 127.12 29.144ZM141.603 19.764L141.911 21.948L141.855 21.752C142.285 20.9867 142.891 20.3707 143.675 19.904C144.459 19.4187 145.421 19.176 146.559 19.176C147.717 19.176 148.678 19.5213 149.443 20.212C150.227 20.884 150.629 21.7613 150.647 22.844V32H146.727V24.3C146.709 23.7587 146.559 23.3293 146.279 23.012C146.018 22.676 145.57 22.508 144.935 22.508C144.338 22.508 143.815 22.704 143.367 23.096C142.919 23.488 142.574 24.02 142.331 24.692C142.089 25.364 141.967 26.1387 141.967 27.016V32H138.047V19.764H141.603ZM160.692 32.336C159.199 32.336 157.93 32.056 156.884 31.496C155.858 30.936 155.074 30.1613 154.532 29.172C153.991 28.1827 153.72 27.044 153.72 25.756C153.72 24.524 154.038 23.4133 154.672 22.424C155.307 21.4347 156.156 20.6507 157.22 20.072C158.284 19.4747 159.47 19.176 160.776 19.176C162.531 19.176 163.968 19.6893 165.088 20.716C166.227 21.724 166.964 23.1893 167.3 25.112L157.78 28.136L156.912 26.008L163.8 23.684L162.988 24.048C162.839 23.5627 162.568 23.1427 162.176 22.788C161.803 22.4147 161.234 22.228 160.468 22.228C159.89 22.228 159.376 22.368 158.928 22.648C158.499 22.9093 158.163 23.292 157.92 23.796C157.696 24.2813 157.584 24.86 157.584 25.532C157.584 26.2973 157.724 26.9413 158.004 27.464C158.284 27.968 158.667 28.3507 159.152 28.612C159.638 28.8733 160.179 29.004 160.776 29.004C161.206 29.004 161.616 28.9293 162.008 28.78C162.419 28.6307 162.82 28.4347 163.212 28.192L164.948 31.104C164.295 31.4773 163.586 31.776 162.82 32C162.074 32.224 161.364 32.336 160.692 32.336Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM16 18C16 20.7614 13.7614 23 11 23C8.23858 23 6 20.7614 6 18C6 15.2386 8.23858 13 11 13C13.7614 13 16 15.2386 16 18ZM15 36C17.7614 36 20 33.7614 20 31C20 28.2386 17.7614 26 15 26C12.2386 26 10 28.2386 10 31C10 33.7614 12.2386 36 15 36ZM34 31C34 33.7614 31.7614 36 29 36C26.2386 36 24 33.7614 24 31C24 28.2386 26.2386 26 29 26C31.7614 26 34 28.2386 34 31ZM33 23C35.7614 23 38 20.7614 38 18C38 15.2386 35.7614 13 33 13C30.2386 13 28 15.2386 28 18C28 20.7614 30.2386 23 33 23ZM27 10C27 12.7614 24.7614 15 22 15C19.2386 15 17 12.7614 17 10C17 7.23858 19.2386 5 22 5C24.7614 5 27 7.23858 27 10ZM22 24C23.1046 24 24 23.1046 24 22C24 20.8954 23.1046 20 22 20C20.8954 20 20 20.8954 20 22C20 23.1046 20.8954 24 22 24Z"
                fill="#E2D703"
              />
              <path
                d="M33.5 38.5C35.5 37.1667 43 35 49.5 40"
                stroke="#E2D703"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>

        <ul className="hidden navbar-list lg:flex">
          <li>
            <Link to="/" class="navbar-link">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/"} class="navbar-link">
              Services
            </Link>
          </li>

          <li>
            <Link to={"/movies"} class="navbar-link">
              Movies
            </Link>
          </li>

          {currentUser && currentUser.email === "dayoogini@gmail.com" && (
            <li>
              <Link to={"/upload-movie"} class="navbar-link">
                Upload Movie
              </Link>
            </li>
          )}

          {currentUser ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Log out
            </button>
          ) : (
            <Link to={"/auth"}>
              <button className="btn btn-primary">Sign in</button>
            </Link>
          )}
        </ul>
      </div>

      <button className="menu-open-btn" data-menu-open-btn>
        {!openMenu && (
          <IonIcon onClick={toggleSideBar} icon={reorderTwo}></IonIcon>
        )}
        {openMenu && (
          <div onClick={toggleSideBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </button>

      <ul
        className={
          openMenu
            ? ` fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-900 bg-[#171D21] z-10 ease-in-out duration-500 `
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-xl font-bold text-[#fdffff] mx-2 my-3 ">
          <Link to={"/"} className="text-white no-underline cursor-pointer">
            <svg
              width="169"
              height="44"
              viewBox="0 0 169 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.66 11.392H69.54V15.312H60.72V19.988H68.364V23.908H60.72V32H56.66V11.392ZM72.8051 19.764H76.7251V32H72.8051V19.764ZM72.7211 15.424C72.7211 14.8453 72.9451 14.3693 73.3931 13.996C73.8597 13.6227 74.3544 13.436 74.8771 13.436C75.3997 13.436 75.8757 13.6227 76.3051 13.996C76.7531 14.3693 76.9771 14.8453 76.9771 15.424C76.9771 16.0027 76.7531 16.4787 76.3051 16.852C75.8757 17.2067 75.3997 17.384 74.8771 17.384C74.3544 17.384 73.8597 17.2067 73.3931 16.852C72.9451 16.4787 72.7211 16.0027 72.7211 15.424ZM80.7621 9.908H84.6821V32H80.7621V9.908ZM92.2751 19.764L92.5831 21.92L92.5271 21.752C93.0125 20.9307 93.6191 20.296 94.3471 19.848C95.0751 19.3813 95.9525 19.148 96.9791 19.148C97.6511 19.148 98.2391 19.2413 98.7431 19.428C99.2658 19.6147 99.7045 19.8947 100.059 20.268C100.414 20.6227 100.656 21.0893 100.787 21.668L100.647 21.696C101.17 20.9307 101.795 20.3147 102.523 19.848C103.27 19.3813 104.044 19.148 104.847 19.148C106.06 19.148 107.022 19.4933 107.731 20.184C108.459 20.856 108.832 21.7333 108.851 22.816V32H104.959V24.44C104.94 23.8987 104.856 23.46 104.707 23.124C104.558 22.7693 104.212 22.5733 103.671 22.536C103.036 22.536 102.495 22.76 102.047 23.208C101.618 23.6373 101.291 24.1973 101.067 24.888C100.862 25.56 100.759 26.26 100.759 26.988V32H96.8391V24.44C96.8205 23.8987 96.7178 23.46 96.5311 23.124C96.3631 22.7693 96.0085 22.5733 95.4671 22.536C94.8511 22.536 94.3285 22.76 93.8991 23.208C93.4885 23.6373 93.1711 24.188 92.9471 24.86C92.7418 25.532 92.6391 26.2227 92.6391 26.932V32H88.7191V19.764H92.2751ZM112.891 9.908H116.811V32H112.891V9.908ZM126 32.336C124.861 32.336 123.825 32.112 122.892 31.664C121.977 31.1973 121.249 30.488 120.708 29.536C120.167 28.584 119.896 27.3707 119.896 25.896C119.896 24.5147 120.176 23.32 120.736 22.312C121.296 21.304 122.033 20.5293 122.948 19.988C123.863 19.428 124.833 19.148 125.86 19.148C127.073 19.148 127.988 19.3533 128.604 19.764C129.239 20.156 129.761 20.5947 130.172 21.08L130.004 21.556L130.368 19.764H134.008V32H130.088V29.34L130.396 30.18C130.359 30.18 130.247 30.292 130.06 30.516C129.873 30.7213 129.593 30.9733 129.22 31.272C128.865 31.552 128.417 31.7947 127.876 32C127.353 32.224 126.728 32.336 126 32.336ZM127.12 29.144C127.587 29.144 128.007 29.0787 128.38 28.948C128.753 28.7987 129.08 28.5933 129.36 28.332C129.64 28.052 129.883 27.7067 130.088 27.296V24.3C129.939 23.8893 129.715 23.544 129.416 23.264C129.117 22.9653 128.763 22.7413 128.352 22.592C127.941 22.424 127.484 22.34 126.98 22.34C126.42 22.34 125.897 22.4893 125.412 22.788C124.945 23.068 124.572 23.46 124.292 23.964C124.012 24.468 123.872 25.0467 123.872 25.7C123.872 26.3533 124.021 26.9413 124.32 27.464C124.619 27.9867 125.011 28.3973 125.496 28.696C126 28.9947 126.541 29.144 127.12 29.144ZM141.603 19.764L141.911 21.948L141.855 21.752C142.285 20.9867 142.891 20.3707 143.675 19.904C144.459 19.4187 145.421 19.176 146.559 19.176C147.717 19.176 148.678 19.5213 149.443 20.212C150.227 20.884 150.629 21.7613 150.647 22.844V32H146.727V24.3C146.709 23.7587 146.559 23.3293 146.279 23.012C146.018 22.676 145.57 22.508 144.935 22.508C144.338 22.508 143.815 22.704 143.367 23.096C142.919 23.488 142.574 24.02 142.331 24.692C142.089 25.364 141.967 26.1387 141.967 27.016V32H138.047V19.764H141.603ZM160.692 32.336C159.199 32.336 157.93 32.056 156.884 31.496C155.858 30.936 155.074 30.1613 154.532 29.172C153.991 28.1827 153.72 27.044 153.72 25.756C153.72 24.524 154.038 23.4133 154.672 22.424C155.307 21.4347 156.156 20.6507 157.22 20.072C158.284 19.4747 159.47 19.176 160.776 19.176C162.531 19.176 163.968 19.6893 165.088 20.716C166.227 21.724 166.964 23.1893 167.3 25.112L157.78 28.136L156.912 26.008L163.8 23.684L162.988 24.048C162.839 23.5627 162.568 23.1427 162.176 22.788C161.803 22.4147 161.234 22.228 160.468 22.228C159.89 22.228 159.376 22.368 158.928 22.648C158.499 22.9093 158.163 23.292 157.92 23.796C157.696 24.2813 157.584 24.86 157.584 25.532C157.584 26.2973 157.724 26.9413 158.004 27.464C158.284 27.968 158.667 28.3507 159.152 28.612C159.638 28.8733 160.179 29.004 160.776 29.004C161.206 29.004 161.616 28.9293 162.008 28.78C162.419 28.6307 162.82 28.4347 163.212 28.192L164.948 31.104C164.295 31.4773 163.586 31.776 162.82 32C162.074 32.224 161.364 32.336 160.692 32.336Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM16 18C16 20.7614 13.7614 23 11 23C8.23858 23 6 20.7614 6 18C6 15.2386 8.23858 13 11 13C13.7614 13 16 15.2386 16 18ZM15 36C17.7614 36 20 33.7614 20 31C20 28.2386 17.7614 26 15 26C12.2386 26 10 28.2386 10 31C10 33.7614 12.2386 36 15 36ZM34 31C34 33.7614 31.7614 36 29 36C26.2386 36 24 33.7614 24 31C24 28.2386 26.2386 26 29 26C31.7614 26 34 28.2386 34 31ZM33 23C35.7614 23 38 20.7614 38 18C38 15.2386 35.7614 13 33 13C30.2386 13 28 15.2386 28 18C28 20.7614 30.2386 23 33 23ZM27 10C27 12.7614 24.7614 15 22 15C19.2386 15 17 12.7614 17 10C17 7.23858 19.2386 5 22 5C24.7614 5 27 7.23858 27 10ZM22 24C23.1046 24 24 23.1046 24 22C24 20.8954 23.1046 20 22 20C20.8954 20 20 20.8954 20 22C20 23.1046 20.8954 24 22 24Z"
                fill="#E2D703"
              />
              <path
                d="M33.5 38.5C35.5 37.1667 43 35 49.5 40"
                stroke="#E2D703"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h1>
        <li className="p-3 mt-20 border-t border-b border-gray-600">
          <Link to="/" onClick={toggleSideBar}>
            Home
          </Link>
        </li>
        <li className="p-3 border-b border-gray-600">
          <Link to="/" onClick={toggleSideBar}>
            Services
          </Link>
        </li>

        <li className="p-3 border-b border-gray-600">
          <Link to="/movies" onClick={toggleSideBar}>
            Movies
          </Link>
        </li>

        {currentUser && currentUser.email === "dayoogini@gmail.com" && (
          <li className="p-3 border-b border-gray-600">
            <Link to={"/upload-movie"} onClick={toggleSideBar}>
              Upload Movie
            </Link>
          </li>
        )}

        <li className="p-3 border-b border-gray-600">
          {currentUser ? (
            <button onClick={handleLogout}>Log out</button>
          ) : (
            <Link to={"/auth"}>
              <button onClick={toggleSideBar}>Sign in</button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
