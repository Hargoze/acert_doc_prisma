import React from "react"
import { Button, Heading, Text, Box, Flex } from '@chakra-ui/core';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
} from "@chakra-ui/core";

function findStable(data) {
    const stable = data.stable
    for (var i=0; i<data.versions.length; i++) {
        if (data.versions[i].name === stable) {
            return (data.versions[i])
        }
    }
    return (null)
}

function findNext(data) {
    const next = data.next
    for (var i=0; i<data.versions.length; i++) {
        if (data.versions[i].name === next) {
            return (data.versions[i])
        }
    }
    return (null)
}

function findRest(data, stable, next)
{
    var array = []
    for (var i=0; i<data.versions.length; i++) {
        if (data.versions[i].name != next && data.versions[i].name != stable) {
            array.push(data.versions[i])
        }
    }
    return (array)
}

const Version = (path) => {
    console.log("props", path)
    var version="v1.2"
    const newData = require('../version.json');
    const stable = findStable(newData)
    const next = findNext(newData)
    const rest = findRest(newData, stable.name, next.name)
    return (
        <Menu>
            <MenuButton as={Button}>
                {version}
            </MenuButton>
            <MenuList>
                <MenuGroup title="next">
                <MenuItem onClick={() => {version=(next.name), console.log(version)}}>{next.name}</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="stable">
                <MenuItem onClick={() => {version=(stable.name), console.log(version)}}>{stable.name}</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="older">
                {rest.map((elem, i) => (
                <MenuItem key={i} onClick={() => {version=(elem.name), console.log(version)}}>{elem.name}</MenuItem>
                ))}
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default Version


