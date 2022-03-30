Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: "xero-connector",
            path: "/xero-connector",
            component: require("./components/Tool"),
        },
    ]);
});
