import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: '22ga3q0d',
    dataset: 'production',
    title: 'Personal Website',
    apiVersion: '2023-01-01',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;