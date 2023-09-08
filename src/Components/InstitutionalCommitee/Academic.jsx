import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Academic = () => {
    const [state, setState] = useState({ numPages: null, pageNumber: 1 })

    const onDocumentLoadSuccess = ({ numPages }) => {
        setState({ numPages });
    };

    const goToPrevPage = () =>
        setState((state) => ({ pageNumber: state.pageNumber - 1 }));
    const goToNextPage = () =>
        setState((state) => ({ pageNumber: state.pageNumber + 1 }));


    const { pageNumber, numPages } = state;

    return (
        <div>
            <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
            </nav>

            <div style={{ width: 600 }}>
                <Document
                    file="/ACADEMIC.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
            </div>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}

export default Academic;