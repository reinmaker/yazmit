import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, DollarSign } from "lucide-react";

// Fake project data
const projects = [
  {
    id: "PRJ-001",
    name: "מגדלי הים התיכון",
    location: "תל אביב",
    status: "בביצוע",
    startDate: "01/01/2023",
    endDate: "31/12/2024",
    budget: "₪ 50,000,000",
    completion: "65%",
    units: 120,
    sold: 78
  },
  {
    id: "PRJ-002", 
    name: "שכונת הגן החדשה",
    location: "רעננה",
    status: "תכנון",
    startDate: "15/06/2024",
    endDate: "30/09/2026",
    budget: "₪ 35,000,000",
    completion: "15%",
    units: 85,
    sold: 12
  },
  {
    id: "PRJ-003",
    name: "קומפלקס הנחל",
    location: "הרצליה",
    status: "הושלם",
    startDate: "10/03/2021",
    endDate: "20/11/2023",
    budget: "₪ 42,000,000",
    completion: "100%",
    units: 95,
    sold: 95
  },
  {
    id: "PRJ-004",
    name: "בית הספר החדש",
    location: "כפר סבא",
    status: "בביצוע",
    startDate: "01/09/2023",
    endDate: "31/08/2025",
    budget: "₪ 28,000,000",
    completion: "40%",
    units: 65,
    sold: 25
  },
  {
    id: "PRJ-005",
    name: "מרכז המסחר הגדול",
    location: "פתח תקווה",
    status: "תכנון",
    startDate: "01/12/2024",
    endDate: "30/06/2027",
    budget: "₪ 75,000,000",
    completion: "5%",
    units: 200,
    sold: 8
  }
];

function getStatusBadgeVariant(status: string) {
  switch (status) {
    case "הושלם": return "default";
    case "בביצוע": return "secondary";
    case "תכנון": return "outline";
    default: return "outline";
  }
}

export default function ProjectsPage() {
  return (
    <div className="space-y-4" dir="rtl">
      <PageHeader 
        title="פרויקטים" 
        actions={
          <Button>
            <Building2 className="h-4 w-4 ml-2" />
            פרויקט חדש
          </Button>
        }
      />

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div className="text-right">
                <p className="text-sm text-gray-600">סך פרויקטים</p>
                <p className="text-2xl font-bold">{projects.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="text-right">
                <p className="text-sm text-gray-600">פרויקטים פעילים</p>
                <p className="text-2xl font-bold">{projects.filter(p => p.status === "בביצוע").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="text-right">
                <p className="text-sm text-gray-600">סך תקציב</p>
                <p className="text-2xl font-bold">₪ 230M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-purple-600" />
              <div className="text-right">
                <p className="text-sm text-gray-600">יחידות נמכרו</p>
                <p className="text-2xl font-bold">{projects.reduce((sum, p) => sum + p.sold, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>רשימת פרויקטים</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">מזהה פרויקט</TableHead>
                <TableHead className="text-right">שם הפרויקט</TableHead>
                <TableHead className="text-right">מיקום</TableHead>
                <TableHead className="text-right">סטטוס</TableHead>
                <TableHead className="text-right">תאריך התחלה</TableHead>
                <TableHead className="text-right">תאריך סיום</TableHead>
                <TableHead className="text-right">תקציב</TableHead>
                <TableHead className="text-right">השלמה</TableHead>
                <TableHead className="text-right">יחידות</TableHead>
                <TableHead className="text-right">נמכרו</TableHead>
                <TableHead className="text-right">פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{project.id}</TableCell>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      {project.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(project.status)}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell>{project.endDate}</TableCell>
                  <TableCell className="font-medium">{project.budget}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: project.completion }}
                        />
                      </div>
                      <span className="text-sm">{project.completion}</span>
                    </div>
                  </TableCell>
                  <TableCell>{project.units}</TableCell>
                  <TableCell>
                    <span className="font-medium">{project.sold}</span>
                    <span className="text-gray-500 text-sm">/{project.units}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm">עריכה</Button>
                      <Button variant="ghost" size="sm">צפייה</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


