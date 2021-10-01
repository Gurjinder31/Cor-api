import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="header">
            <Link to="/" class="navbar-brand">Home</Link>
            <Link to="/like" class="navbar-brand">Favorite Pics</Link>
        </div>
    )
}

export default Header
