"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input as FormInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Input() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockData = [
    {
      name: "Sample Entry 1",
      editDate: "2023-05-15",
      dataCapturer: "John Doe",
      activityType: "Stationary Fuels",
      docs: 2,
      status: "Approved",
      userName: "John Doe",
      value: "100",
      emissions: "50 kg CO2e",
      costUom: "USD",
      type: "Fuel",
      activity: "Stationary",
    },
    {
      name: "Sample Entry 2",
      editDate: "2023-05-20",
      dataCapturer: "Jane Smith",
      activityType: "Mobile Fuels",
      docs: 1,
      status: "Pending",
      userName: "Jane Smith",
      value: "200",
      emissions: "75 kg CO2e",
      costUom: "USD",
      type: "Fuel",
      activity: "Mobile",
    },
    {
      name: "Sample Entry 3",
      editDate: "2023-05-25",
      dataCapturer: "Bob Johnson",
      activityType: "Process",
      docs: 0,
      status: "Rejected",
      userName: "Bob Johnson",
      value: "150",
      emissions: "60 kg CO2e",
      costUom: "USD",
      type: "Process",
      activity: "Industrial",
    },
  ];

  const filteredData = mockData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.dataCapturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.activityType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.emissions.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.costUom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Tabs defaultValue="enter-data" className="space-y-4">
        <TabsList>
          <TabsTrigger value="enter-data">Enter Data</TabsTrigger>
          <TabsTrigger value="upload-file">Upload File</TabsTrigger>
          <TabsTrigger value="input-history">Input History</TabsTrigger>
          <TabsTrigger value="trace-source">Trace Source</TabsTrigger>
        </TabsList>

        <TabsContent value="enter-data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter Data</CardTitle>
              <CardDescription>
                Manually enter your emissions data here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="activity-type">
                      Step 1: Select Activity Type
                    </Label>
                    <select
                      id="activity-type"
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select...</option>
                      <option value="stationary-fuels">Stationary Fuels</option>
                      <option value="mobile-fuels">Mobile Fuels</option>
                      <option value="fugitive-gas">Fugitive Gas</option>
                      <option value="process">Process</option>
                      <option value="waste-water">Waste Water</option>
                      <option value="renewable-electricity">
                        Renewable Electricity
                      </option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="cost-centre">Step 3: Cost Centre</Label>
                    <FormInput id="cost-centre" placeholder="e.g., FIN" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date">Step 2: Start Date</Label>
                    <FormInput
                      id="start-date"
                      type="date"
                      defaultValue="2025-05-01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    <FormInput
                      id="end-date"
                      type="date"
                      defaultValue="2025-05-31"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="consumption-type">
                      Step 4: Consumption Type
                    </Label>
                    <FormInput
                      id="consumption-type"
                      placeholder="e.g., Coal Industrial"
                    />
                  </div>
                  <div>
                    <Label htmlFor="consumption">Step 5: Consumption</Label>
                    <FormInput
                      id="consumption"
                      placeholder="Enter consumption value"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="monetary-value">
                      Step 6: Monetary Value
                    </Label>
                    <FormInput
                      id="monetary-value"
                      placeholder="Enter monetary value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Step 7: Notes</Label>
                    <FormInput id="notes" placeholder="Additional notes" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="documents">Step 8: Documents</Label>
                  <FormInput id="documents" type="file" />
                  <p className="text-sm text-muted-foreground">
                    No documents selected.
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button">Actions</Button>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload-file" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload File</CardTitle>
              <CardDescription>Upload a file to import data.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="upload-type">Please select upload type</Label>
                  <select
                    id="upload-type"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select...</option>
                    <option value="emissions-data">Emissions Data</option>
                    <option value="fuel-consumption">Fuel Consumption</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <FormInput id="notes" placeholder="Add notes here" />
                </div>
                <div>
                  <Label>Drag and Drop Files</Label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      // Handle drop logic here
                    }}
                  >
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your files here, or click to select files.
                    </p>
                    <Button type="button" variant="outline" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Upload</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="input-history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reporting Period</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex space-x-4">
                    <div>
                      <FormInput id="start-date-history" type="date" />
                    </div>
                    <div>
                      <FormInput id="end-date-history" type="date" />
                    </div>
                    <div className="flex items-end">
                      <Button>Filter</Button>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <FormInput
                      id="search"
                      placeholder="Search table..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Edit Date</TableHead>
                      <TableHead>Data Capturer</TableHead>
                      <TableHead>Activity Type</TableHead>
                      <TableHead>Docs</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.editDate}</TableCell>
                        <TableCell>{row.dataCapturer}</TableCell>
                        <TableCell>{row.activityType}</TableCell>
                        <TableCell>{row.docs}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trace-source" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trace Source</CardTitle>
              <CardDescription>
                Trace the source of your emissions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex space-x-4">
                    <div>
                      <FormInput id="start-date-trace" type="date" />
                    </div>
                    <div>
                      <FormInput id="end-date-trace" type="date" />
                    </div>
                    <div className="flex items-end">
                      <Button>Filter</Button>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <FormInput
                      id="search-trace"
                      placeholder="Search table..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Edit Date</TableHead>
                      <TableHead>User Name</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Emissions</TableHead>
                      <TableHead>Cost UOM</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Activity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.editDate}</TableCell>
                        <TableCell>{row.userName}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.emissions}</TableCell>
                        <TableCell>{row.costUom}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
