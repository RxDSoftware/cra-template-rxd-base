import React from 'react';

interface FooterTypes {
    copyrightHolder: string;
    children?: React.ReactNode;
}

export default function Acronym(props: FooterTypes) {
    return (
        <footer className='FooterWrapper'>
        <Paper square>
          <div className='InnerFooter'>
            {props.children}
          </div>
          <Typography color='text.secondary' className='Copyright' variant="subtitle2">Copyright &#169; {new Date().getFullYear()} {props.copyrightHolder}</Typography>
        </Paper>
    </footer>
    );
}