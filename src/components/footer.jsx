import React from "react";

function Footer(props) {
    return (
        <footer>
            <div className="wrapper">
                {
                    props.linksList.map((obj, index) => {
                        return (
                            <div className="links" key={index}>
                                <h3>{obj.name}</h3>
                                <ul>
                                    {obj.links.map((item, index) => {
                                        return <li key={index}><a href={item.href}>{item.name}</a></li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div> 
            <div className="copyright"><small>Copyright 2013 CSS Author</small></div>
        </footer>
    )
}

export default Footer; 