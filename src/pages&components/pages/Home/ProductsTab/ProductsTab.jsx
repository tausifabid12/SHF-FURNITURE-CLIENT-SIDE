import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductsTabPanel from "../ProductsTabPanel/ProductsTabPanel";

const ProductsTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedCat, setSelectedCat] = useState("bed");
  //   const { data: categories } = useQuery({
  //     queryKey: ["categories"],
  //     queryFn: () =>
  //       fetch("http://localhost:5000/category").then((res) => res.json()),
  //   });

  useEffect(() => {
    const category = ["bed", "chair", "table", "sofa"];
    const cat = category[tabIndex];
    setSelectedCat(cat);
  }, [tabIndex]);

  const { data: products } = useQuery({
    queryKey: ["products", selectedCat],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${selectedCat}`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="px-9 py-12">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex  justify-between ">
          <div className="text-4xl font-bold">Popular Products</div>
          <div className="space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">
            <TabList>
              <Tab>Bed</Tab>
              <Tab>Chair</Tab>
              <Tab>Table</Tab>
              <Tab>Sofa</Tab>
            </TabList>
          </div>
        </div>

        <TabPanel>
          <ProductsTabPanel products={products}></ProductsTabPanel>
        </TabPanel>
        <TabPanel>
          <ProductsTabPanel products={products}></ProductsTabPanel>
        </TabPanel>
        <TabPanel>
          <ProductsTabPanel products={products}></ProductsTabPanel>
        </TabPanel>
        <TabPanel>
          <ProductsTabPanel products={products}></ProductsTabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductsTab;
