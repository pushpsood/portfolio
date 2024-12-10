/**
 * Logs the opening of a link and can be extended to include analytics.
 *
 * @param {string} id - The ID of the link that was opened.
 */
export const handleLinkOpen = (id: string) => {
    console.log(`Link with id ${id} opened`);
    // ToDo: Add analytics
};