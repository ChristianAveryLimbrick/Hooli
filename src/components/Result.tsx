import React from 'react';
import { useState } from 'react';

export default function Result({ title, url, description, imageUrl }) {
    return (
      <div className="my-3 p-3 border-bottom">
        <div className="d-flex align-items-center mb-2">
          {imageUrl && <img src={imageUrl} alt="Result" className="me-2" style={{ width: '50px', height: '50px' }} />}
          <div>
            <h4 className="websiteHomeName mb-0">{title}</h4>
            <p className="websiteLink text-muted mb-0">{url}</p>
          </div>
        </div>
        <div>
          <h2 className="mainResult fs-5 fw-normal">{title}</h2>
          <p className="resultBlurb">{description}</p>
        </div>
      </div>
    );
  }
  