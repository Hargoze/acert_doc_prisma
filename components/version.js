import { List, ListItem, Heading } from '@chakra-ui/core';

const Version = () => {
    const newData = require('../version.json');
    console.log(newData)
    return (
    <>
        <Heading mt={8} mb={4} fontWeight="800">lol</Heading>
    </>
    )
}

export default Version