import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <>
                <div style={{ background: "pink", padding: 10 }}>
                    <span>Welcome user </span>
                    <button
                        style={{
                            float: "right",
                            // marginRight: 50,
                            marginTop: 10,
                        }}
                    >
                        Logout
                    </button>
                    <span>Team assigned: </span>
                    <span>Permission Groups:</span>
                    <nav>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                    </nav>
                </div>
            </>
        </>
    );
}

export default NavBar;
