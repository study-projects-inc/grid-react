export { default as Hello } from './hello'; // export the default export from './hello', this is Hello component
export * from './hello'; // export all named exports from './hello' like HelloProps
export { default as GridLayout} from './layout';
export * from './layout';
export { default as MainContent } from './layout/main-content';
export { default as Footer } from './layout/footer';
export { default as Header } from './layout/header';
export { default as LeftSidebar } from './layout/left-sidebar';
export { default as RightSidebar } from './layout/right-sidebar';