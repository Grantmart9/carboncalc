"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEmissions } from "@/lib/emissionsContext";
import { dummyEmissionResult } from "@/lib/dummyData";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  console.log("Dashboard component rendering");
  console.log("Dashboard loaded, checking for navigation...");
  const { result } = useEmissions();

  const emissions = result || dummyEmissionResult;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Tabs defaultValue="overview" className="w-full ">
        <TabsList className="grid w-full grid-cols-8 mb-6">
          <TabsTrigger
            value="overview"
            className="flex flex-col items-center gap-1"
          >
            <DashboardIcon className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="stationary-fuel"
            className="flex flex-col items-center gap-1"
          >
            <LocalGasStationIcon className="h-4 w-4" />
            Stationary Fuel
          </TabsTrigger>
          <TabsTrigger
            value="mobile-fuel"
            className="flex flex-col items-center gap-1"
          >
            <DirectionsCarIcon className="h-4 w-4" />
            Mobile Fuel
          </TabsTrigger>
          <TabsTrigger
            value="fugitive-gas"
            className="flex flex-col items-center gap-1"
          >
            <CloudIcon className="h-4 w-4" />
            Fugitive Gas
          </TabsTrigger>
          <TabsTrigger
            value="process"
            className="flex flex-col items-center gap-1"
          >
            <SettingsIcon className="h-4 w-4" />
            Process
          </TabsTrigger>
          <TabsTrigger
            value="waste-water"
            className="flex flex-col items-center gap-1"
          >
            <WaterDropIcon className="h-4 w-4" />
            Waste Water
          </TabsTrigger>
          <TabsTrigger
            value="renewable-electricity"
            className="flex flex-col items-center gap-1"
          >
            <SolarPowerIcon className="h-4 w-4" />
            Renewable Electricity
          </TabsTrigger>
          <TabsTrigger
            value="electricity"
            className="flex flex-col items-center gap-1"
          >
            <ElectricBoltIcon className="h-4 w-4" />
            Electricity
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.totalEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Electricity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.electricityEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +10% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fuel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.fuelEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.wasteEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  -2% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for emissions trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your latest emission reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    Report 1: {emissions.totalEmissions.toFixed(2)} kg CO2e
                  </div>
                  <div className="text-sm">Report 2: 1367 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="stationary-fuel">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Stationary Fuel Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.fuelEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gasoline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">150.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +10% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Diesel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">200.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Fuels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -2% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Stationary Fuel Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for stationary fuel trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest stationary fuel reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    Report 1: {emissions.fuelEmissions.toFixed(2)} kg CO2e
                  </div>
                  <div className="text-sm">Report 2: 400 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="mobile-fuel">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Mobile Fuel Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.fuelEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gasoline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +10% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Diesel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">150.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Fuels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -2% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Mobile Fuel Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for mobile fuel trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest mobile fuel reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    Report 1: {emissions.fuelEmissions.toFixed(2)} kg CO2e
                  </div>
                  <div className="text-sm">Report 2: 280 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="fugitive-gas">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Fugitive Gas Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Methane</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CO2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Gases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Fugitive Gas Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for fugitive gas trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest fugitive gas reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Report 1: 50.00 kg CO2e</div>
                  <div className="text-sm">Report 2: 48 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="process">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Process Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Chemical Processes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">60.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">40.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Processes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Process Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for process trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your latest process reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Report 1: 100.00 kg CO2e</div>
                  <div className="text-sm">Report 2: 97 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="waste-water">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Waste Water Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.wasteEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  -2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Organic Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">80.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Chemical Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Waste Water Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for waste water trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest waste water reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    Report 1: {emissions.wasteEmissions.toFixed(2)} kg CO2e
                  </div>
                  <div className="text-sm">Report 2: 112 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="renewable-electricity">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Renewable Electricity Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  0% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Solar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wind</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hydro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Renewable Electricity Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for renewable electricity trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest renewable electricity reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Report 1: 0.00 kg CO2e</div>
                  <div className="text-sm">Report 2: 0 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="electricity">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Electricity Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {emissions.electricityEmissions.toFixed(2)} kg CO2e
                </div>
                <p className="text-xs text-muted-foreground">
                  +10% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Grid Electricity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">300.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Backup Generators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">
                  -5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Other Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20.00 kg CO2e</div>
                <p className="text-xs text-muted-foreground">0% change</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Electricity Emissions Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chart placeholder for electricity trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                  Your latest electricity reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    Report 1: {emissions.electricityEmissions.toFixed(2)} kg
                    CO2e
                  </div>
                  <div className="text-sm">Report 2: 350 kg CO2e</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
