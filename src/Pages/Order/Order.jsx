import { useState } from "react";
import Cover from "../../Componentes/Cover/Cover";
import coverBg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import TabComponent from "./TabComponent";

const Order = () => {
    const [tabindex, setTabindex] = useState(0);
    const [menu] = useMenu();

    const pizza = menu.filter(item => item.category === "pizza");
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drink = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <Cover image={coverBg} title="Order Now"></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <TabComponent items={pizza}></TabComponent>
                </TabPanel>
                <TabPanel>
                    <TabComponent items={dessert}></TabComponent>
                </TabPanel>
                <TabPanel>
                    <TabComponent items={salad}></TabComponent>
                </TabPanel>
                <TabPanel>
                    <TabComponent items={soup}></TabComponent>
                </TabPanel>
                <TabPanel>
                    <TabComponent items={drink}></TabComponent>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
