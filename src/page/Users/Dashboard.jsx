import React from "react";
import { KpiCards } from "../../components/dashboard/KpiCards"; // Reemplaza "./KpiCards" con la ruta correcta si es diferente
import { MetricResumen2 } from "../../components"; // Reemplaza "./MetricResumen" con la ruta correcta si es diferente
import { VolumeTransactions } from "../../components/dashboard/VolumeTransactions";

export const Dashboard = () => {
  return (
    <div className="w-full h-[540px] mt-12">
      <div className="flex gap-4">
        <div className="flex w-[900px] flex-grow relative h-[540px] flex-col">
            <div className="mt-5 justify-center">
              <KpiCards />
          </div>
          <div className="w-full flex">
            <div className="rounded-lg flex-grow w-[350px] bg-gray-900">
              <MetricResumen2 />
            </div>
            <div className="w-[295px] ml-5">
              <VolumeTransactions />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg w-[350px] h-[540px]"></div>
      </div>
    </div>
  );

  // return (
  //   <div style={{ margin: "0", width: "100%", padding: "0 0 5px 0" }}>
  //     <Title className="mt-10">Dashboard</Title>
  //     <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

  //     <TabGroup className="mt-6">
  //       <TabPanels>
  //         <TabPanel>
  //           <KpiCards />
  //           <Grid numItemsMd={3} numItemsLg={1} className="gap-6 mt-6">
  //             {/* <VolumeTransactions /> */}
  //             <MetricResumen2 />
  //           </Grid>
  //           <div className="mb-4">
  //             <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
  //               {categories.map((item) => (
  //                 <MetricResumen
  //                   key={item.title}
  //                   data={data}
  //                   categories={[item]}
  //                 />
  //               ))}
  //             </Grid>
  //           </div>
  //         </TabPanel>
  //       </TabPanels>
  //     </TabGroup>
  //   </div>
  // );
};
