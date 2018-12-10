import React from "react";
import "./Description.scss";
import {
    LabelIcon,
    LocationIcon,
    AccessTimeIcon,
    OpenInNewIcon
  } from "mdi-react";

export const Description = ({ organizers, dates, mapUrl, place, info }) => {
    return ( 
        <>
            <div className="infobox">
                <div className="infobox__container">
                    <p>
                        <LabelIcon className="infobox__icon" size={20} /> {organizers}
                    </p>
                    <p>
                        <AccessTimeIcon className="infobox__icon" size={20} /> {dates}
                    </p>
                    <p>
                        <LocationIcon className="infobox__icon" size={20} /> 
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer">{place}</a>
                        <OpenInNewIcon className="infobox__icon--right" size={14} />
                    </p>
                </div>
            </div>
            <div className="edescr">
                <h3>Informazioni</h3>
                <div dangerouslySetInnerHTML={info} className="edescr__container"></div>
            </div>

        </>
    )
}