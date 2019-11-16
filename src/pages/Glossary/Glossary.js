import React, { useState }  from 'react';
import _                    from 'lodash';
import { Terms }            from '../../terms';
import { Card, CardContent, Drawer, ListItem, Typography, Container, Fab }   from '@material-ui/core';
import './Glossary.scss';

const Glossary = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const alphabet = _.range(26)

    const _closeDrawer = () => setIsDrawerOpen(false)
    const _openDrawer = () => setIsDrawerOpen(true)
    const _scrollToView = id => () => {
        // NOTE: sure there is a way to do this with refs + react hooks + function component but can't figure it out.
        //       document.getElementById really isn't the "react" way of doing things but it works
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        _closeDrawer();
    }

    return(
        <Container className='containerMargin' maxWidth="md" >
            {Terms && _.map(Terms, (data, index) => (
                <Card className='cardSpacing' key={index} id={data.id}>
                    <CardContent>
                        <Typography variant="h5">
                            {data.term}
                        </Typography>
                        <Typography className='description' variant="body1">
                            {data.description}
                        </Typography>
                        <Typography className='nested' variant="body2">
                            {data.nested}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Fab className='azFab' onClick={_openDrawer}>
                <Typography variant='body1'>
                    A-Z
                </Typography>
            </Fab>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={_closeDrawer}
            >
            {_.map(alphabet, i => (
                <ListItem
                    key={i}
                    onClick={_scrollToView(String.fromCharCode(97 + i))}
                    button
                >
                    {String.fromCharCode(65 + i)}
                </ListItem>
            ))}
            </Drawer>
        </Container>
    );
}

export default Glossary