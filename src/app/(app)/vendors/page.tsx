import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Factory, Phone, Mail, MapPin, Star, DollarSign, TrendingUp, Users } from "lucide-react";

// Fake vendor data
const vendors = [
  {
    id: "VEN-001",
    name: "חברת בניין ישראל בע\"מ",
    category: "קבלן ראשי",
    contact: "יוסי כהן",
    phone: "03-1234567",
    email: "yossi@binyan-israel.co.il",
    location: "תל אביב",
    status: "פעיל",
    rating: 4.8,
    projectsCount: 12,
    totalContracts: "₪ 45,000,000",
    lastPayment: "15/11/2024",
    paymentStatus: "שולם"
  },
  {
    id: "VEN-002",
    name: "אלקטרה מערכות בע\"מ",
    category: "חשמל ומיזוג",
    contact: "רונית לוי",
    phone: "04-9876543",
    email: "ronit@electra.co.il",
    location: "חיפה",
    status: "פעיל",
    rating: 4.5,
    projectsCount: 8,
    totalContracts: "₪ 12,500,000",
    lastPayment: "22/11/2024",
    paymentStatus: "ממתין"
  },
  {
    id: "VEN-003",
    name: "גרניט ושיש הגליל",
    category: "חומרי גמר",
    contact: "משה אברהם",
    phone: "08-5555555",
    email: "moshe@granit-galil.com",
    location: "באר שבע",
    status: "מושעה",
    rating: 3.2,
    projectsCount: 3,
    totalContracts: "₪ 2,800,000",
    lastPayment: "05/10/2024",
    paymentStatus: "איחור"
  },
  {
    id: "VEN-004",
    name: "צנרת ומים בע\"מ",
    category: "אינסטלציה",
    contact: "דני גרין",
    phone: "02-7777777",
    email: "danny@pipes-water.co.il",
    location: "ירושלים",
    status: "פעיל",
    rating: 4.2,
    projectsCount: 15,
    totalContracts: "₪ 8,900,000",
    lastPayment: "28/11/2024",
    paymentStatus: "שולם"
  },
  {
    id: "VEN-005",
    name: "אדריכלות מודרנית",
    category: "תכנון ועיצוב",
    contact: "שירה ברק",
    phone: "09-3333333",
    email: "shira@modern-arch.co.il",
    location: "רמת גן",
    status: "פעיל",
    rating: 4.9,
    projectsCount: 6,
    totalContracts: "₪ 6,200,000",
    lastPayment: "30/11/2024",
    paymentStatus: "שולם"
  },
  {
    id: "VEN-006",
    name: "בטון מזוין צפון",
    category: "בטון וברזל",
    contact: "עמיר דוד",
    phone: "04-1111111",
    email: "amir@beton-tzafon.co.il",
    location: "נהריה",
    status: "פעיל",
    rating: 4.1,
    projectsCount: 9,
    totalContracts: "₪ 18,700,000",
    lastPayment: "25/11/2024",
    paymentStatus: "ממתין"
  }
];

function getStatusBadgeVariant(status: string) {
  switch (status) {
    case "פעיל": return "default";
    case "מושעה": return "destructive";
    default: return "outline";
  }
}

function getPaymentStatusBadgeVariant(status: string) {
  switch (status) {
    case "שולם": return "default";
    case "ממתין": return "secondary";
    case "איחור": return "destructive";
    default: return "outline";
  }
}

function renderStarRating(rating: number) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/50"}`}
        />
      ))}
              <span className="text-xs text-muted-foreground mr-1">{rating}</span>
    </div>
  );
}

export default function VendorsPage() {
  const activeVendors = vendors.filter(v => v.status === "פעיל").length;
  const totalContracts = vendors.reduce((sum, v) => sum + parseFloat(v.totalContracts.replace(/[₪,]/g, "")), 0);
  const averageRating = vendors.reduce((sum, v) => sum + v.rating, 0) / vendors.length;

  return (
    <div className="space-y-4" dir="rtl">
      <PageHeader 
        title="ספקים" 
        actions={
          <Button>
            <Factory className="h-4 w-4 ml-2" />
            ספק חדש
          </Button>
        }
      />

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">סך ספקים</p>
                <p className="text-2xl font-bold">{vendors.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">ספקים פעילים</p>
                <p className="text-2xl font-bold">{activeVendors}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">סך חוזים</p>
                <p className="text-2xl font-bold">₪ {(totalContracts / 1000000).toFixed(0)}M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-purple-600" />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">דירוג ממוצע</p>
                <p className="text-2xl font-bold">{averageRating.toFixed(1)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vendors Table */}
      <Card>
        <CardHeader>
          <CardTitle>רשימת ספקים</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">מזהה</TableHead>
                <TableHead className="text-right">שם הספק</TableHead>
                <TableHead className="text-right">קטגוריה</TableHead>
                <TableHead className="text-right">איש קשר</TableHead>
                <TableHead className="text-right">טלפון</TableHead>
                <TableHead className="text-right">מיקום</TableHead>
                <TableHead className="text-right">סטטוס</TableHead>
                <TableHead className="text-right">דירוג</TableHead>
                <TableHead className="text-right">פרויקטים</TableHead>
                <TableHead className="text-right">סך חוזים</TableHead>
                <TableHead className="text-right">תשלום אחרון</TableHead>
                <TableHead className="text-right">פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{vendor.id}</TableCell>
                  <TableCell className="font-medium">{vendor.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{vendor.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{vendor.contact}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {vendor.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                                              <Phone className="h-3 w-3 text-muted-foreground" />
                      {vendor.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                                              <MapPin className="h-3 w-3 text-muted-foreground" />
                      {vendor.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(vendor.status)}>
                      {vendor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {renderStarRating(vendor.rating)}
                  </TableCell>
                  <TableCell className="font-medium">{vendor.projectsCount}</TableCell>
                  <TableCell className="font-medium">{vendor.totalContracts}</TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm">{vendor.lastPayment}</div>
                      <Badge 
                        variant={getPaymentStatusBadgeVariant(vendor.paymentStatus)}
                        className="text-xs"
                      >
                        {vendor.paymentStatus}
                      </Badge>
                    </div>
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


