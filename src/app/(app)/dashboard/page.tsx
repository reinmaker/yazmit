import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-4" dir="rtl">
      <PageHeader title="דשבורד" />

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="מזומן עכשיו" value="₪ 2,847,350" subtext="יתרת מזומן זמינה" />
        <KpiCard title="סטיות היום" value="3" subtext="דורש טיפול מיידי" />
        <KpiCard title="דרישות ממתינות" value="12" subtext="ממתין לאישור" />
        <KpiCard title="פיגורים פתוחים" value="₪ 485,200" subtext="סך פיגורים" />
      </div>

      {/* Panels */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* A) תזרים 30 יום */}
        <Card>
          <CardHeader>
            <CardTitle>תזרים מזומנים</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="7" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="7">7 ימים</TabsTrigger>
                <TabsTrigger value="30">30 יום</TabsTrigger>
              </TabsList>
              
              <TabsContent value="7" className="space-y-4">
                {/* Summary numbers for 7 days */}
                <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">₪ 1.47M</div>
                    <div className="text-xs text-gray-600">סך הכנסות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">₪ 1.28M</div>
                    <div className="text-xs text-gray-600">סך הוצאות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">₪ +190K</div>
                    <div className="text-xs text-gray-600">תזרים נטו</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>הכנסות</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>הוצאות</span>
                  </div>
                </div>
                
                {/* 7-day chart */}
                <div className="h-48 bg-gray-50 p-4 rounded">
                  <div className="h-full flex items-end justify-between gap-1">
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">+130K</div>
                      <div className="w-full bg-green-500 rounded-t h-20"></div>
                      <div className="text-xs text-gray-600 mt-1">א'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">-130K</div>
                      <div className="w-full bg-red-500 rounded-t h-16"></div>
                      <div className="text-xs text-gray-600 mt-1">ב'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">+330K</div>
                      <div className="w-full bg-green-500 rounded-t h-32"></div>
                      <div className="text-xs text-gray-600 mt-1">ג'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">-200K</div>
                      <div className="w-full bg-red-500 rounded-t h-24"></div>
                      <div className="text-xs text-gray-600 mt-1">ד'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">+530K</div>
                      <div className="w-full bg-green-500 rounded-t h-40"></div>
                      <div className="text-xs text-gray-600 mt-1">ה'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">-160K</div>
                      <div className="w-full bg-red-500 rounded-t h-18"></div>
                      <div className="text-xs text-gray-600 mt-1">ו'</div>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-700 mb-1">-30K</div>
                      <div className="w-full bg-red-500 rounded-t h-12"></div>
                      <div className="text-xs text-gray-600 mt-1">ש'</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="30" className="space-y-4">
                {/* Summary numbers for 30 days */}
                <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">₪ 6.2M</div>
                    <div className="text-xs text-gray-600">סך הכנסות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">₪ 5.8M</div>
                    <div className="text-xs text-gray-600">סך הוצאות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">₪ +400K</div>
                    <div className="text-xs text-gray-600">תזרים נטו</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>הכנסות</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>הוצאות</span>
                  </div>
                </div>
                
                {/* 30-day chart - simplified */}
                <div className="h-48 bg-gray-50 p-4 rounded">
                  <div className="h-full flex items-end justify-between gap-1">
                    {[
                      { week: "שבוע 1", net: 450, color: "green" },
                      { week: "שבוע 2", net: -120, color: "red" },
                      { week: "שבוע 3", net: 680, color: "green" },
                      { week: "שבוע 4", net: -200, color: "red" }
                    ].map((item, i) => {
                      const heightClass = Math.abs(item.net) > 500 ? 'h-32' : 
                                         Math.abs(item.net) > 300 ? 'h-24' :
                                         Math.abs(item.net) > 150 ? 'h-16' : 'h-12';
                      
                      return (
                        <div key={i} className="flex flex-col items-center flex-1">
                          <div className="text-xs text-gray-700 mb-1">
                            {item.net > 0 ? '+' : ''}{item.net}K
                          </div>
                          <div className={`w-full ${item.color === 'green' ? 'bg-green-500' : 'bg-red-500'} rounded-t ${heightClass}`}></div>
                          <div className="text-xs text-gray-600 mt-1">{item.week}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">
                    תצוגה שבועית - 30 יום
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* B) מכירות חודשיות */}
        <Card>
          <CardHeader>
            <CardTitle>מכירות</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">חודשי</TabsTrigger>
                <TabsTrigger value="quarterly">רבעוני</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly" className="space-y-4">
                {/* Summary numbers */}
                <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">230</div>
                    <div className="text-xs text-gray-600">סך יחידות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">₪ 368M</div>
                    <div className="text-xs text-gray-600">סך הכנסות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">₪ 1.6M</div>
                    <div className="text-xs text-gray-600">ממוצע ליחידה</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>יחידות נמכרו</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>הכנסות (מיליוני ₪)</span>
                  </div>
                </div>
                
                {/* Monthly chart */}
                <div className="h-48 bg-gray-50 p-4 rounded">
                  <div className="h-full flex items-end justify-between gap-1">
                    {[
                      { month: "ינו", units: 12, revenue: 18.5 },
                      { month: "פבר", units: 8, revenue: 12.8 },
                      { month: "מרץ", units: 15, revenue: 24.2 },
                      { month: "אפר", units: 22, revenue: 35.6 },
                      { month: "מאי", units: 18, revenue: 28.9 },
                      { month: "יונ", units: 25, revenue: 41.2 },
                      { month: "יול", units: 31, revenue: 48.7 },
                      { month: "אוג", units: 19, revenue: 29.8 },
                      { month: "ספט", units: 27, revenue: 43.1 },
                      { month: "אוק", units: 23, revenue: 37.2 },
                      { month: "נוב", units: 16, revenue: 25.6 },
                      { month: "דצמ", units: 14, revenue: 22.4 }
                    ].map((item, i) => {
                      const heightClass = item.units <= 10 ? 'h-8' : 
                                        item.units <= 15 ? 'h-12' :
                                        item.units <= 20 ? 'h-16' :
                                        item.units <= 25 ? 'h-20' :
                                        item.units <= 30 ? 'h-28' : 'h-36';
                      
                      return (
                        <div key={i} className="flex flex-col items-center flex-1">
                          <div className="text-xs text-gray-700 mb-1">₪{item.revenue}M</div>
                          <div className={`w-full bg-blue-500 rounded-t ${heightClass}`}></div>
                          <div className="text-xs text-gray-600 mt-1 font-medium">{item.month}</div>
                          <div className="text-xs text-gray-500">{item.units}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="quarterly" className="space-y-4">
                {/* Summary numbers for quarterly */}
                <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">230</div>
                    <div className="text-xs text-gray-600">סך יחידות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">₪ 368M</div>
                    <div className="text-xs text-gray-600">סך הכנסות</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">₪ 1.6M</div>
                    <div className="text-xs text-gray-600">ממוצע ליחידה</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>יחידות נמכרו</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>הכנסות (מיליוני ₪)</span>
                  </div>
                </div>
                
                {/* Quarterly chart */}
                <div className="h-48 bg-gray-50 p-4 rounded">
                  <div className="h-full flex items-end justify-between gap-1">
                    {[
                      { quarter: "רבעון 1", units: 35, revenue: 55.5 },
                      { quarter: "רבעון 2", units: 65, revenue: 105.7 },
                      { quarter: "רבעון 3", units: 77, revenue: 121.6 },
                      { quarter: "רבעון 4", units: 53, revenue: 85.2 }
                    ].map((item, i) => {
                      const heightClass = item.units <= 40 ? 'h-16' : 
                                        item.units <= 60 ? 'h-24' :
                                        item.units <= 70 ? 'h-32' : 'h-40';
                      
                      return (
                        <div key={i} className="flex flex-col items-center flex-1">
                          <div className="text-xs text-gray-700 mb-1">₪{item.revenue}M</div>
                          <div className={`w-full bg-blue-500 rounded-t ${heightClass}`}></div>
                          <div className="text-xs text-gray-600 mt-1 font-medium">{item.quarter}</div>
                          <div className="text-xs text-gray-500">{item.units}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row - Three Columns */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* תור לאישור */}
        <Card>
          <CardHeader>
            <CardTitle>תור לאישור</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { id: 1, type: "בקשת תשלום", vendor: "חברת בניין ישראל", amount: "₪ 125,000", date: "29/11/2024", priority: "גבוה" },
                { id: 2, type: "שינוי חוזה", vendor: "אלקטרה מערכות", amount: "₪ 45,000", date: "28/11/2024", priority: "בינוני" },
                { id: 3, type: "אישור חשבונית", vendor: "צנרת ומים", amount: "₪ 18,500", date: "27/11/2024", priority: "נמוך" },
                { id: 4, type: "בקשת תשלום", vendor: "גרניט ושיש הגליל", amount: "₪ 67,300", date: "26/11/2024", priority: "גבוה" },
                { id: 5, type: "אישור עבודה נוספת", vendor: "בטון מזוין צפון", amount: "₪ 89,200", date: "25/11/2024", priority: "בינוני" }
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-md border p-3 bg-white" dir="rtl">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      דחה
                    </Button>
                    <Button size="sm" variant="outline">
                      אשר
                    </Button>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-sm font-medium">{item.type}</div>
                    <div className="text-xs text-black/60">{item.vendor} • {item.amount}</div>
                    <div className="text-xs text-black/40">{item.date}</div>
                  </div>
                  <div className={`h-3 w-3 rounded-full ${
                    item.priority === "גבוה" ? "bg-red-500" : 
                    item.priority === "בינוני" ? "bg-yellow-500" : "bg-green-500"
                  }`} aria-hidden />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>פעילות אחרונה</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "תשלום בוצע", details: "לחברת בניין ישראל - ₪ 250,000", time: "לפני 2 שעות", type: "payment" },
                { action: "פרויקט חדש", details: "מגדלי הים התיכון - הוסף", time: "לפני 4 שעות", type: "project" },
                { action: "חוזה נחתם", details: "עם אלקטרה מערכות", time: "לפני יום", type: "contract" },
                { action: "אישור ניתן", details: "לבקשת תשלום #1247", time: "לפני יומיים", type: "approval" },
                { action: "ספק חדש", details: "צנרת ומים - הוסף למערכת", time: "לפני 3 ימים", type: "vendor" }
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3" dir="rtl">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "payment" ? "bg-green-500" :
                    activity.type === "project" ? "bg-blue-500" :
                    activity.type === "contract" ? "bg-purple-500" :
                    activity.type === "approval" ? "bg-yellow-500" : "bg-gray-500"
                  }`} />
                  <div className="flex-1 text-right">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-xs text-black/60">{activity.details}</div>
                    <div className="text-xs text-black/40">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Status Overview */}
        <Card>
          <CardHeader>
            <CardTitle>סטטוס פרויקטים</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "מגדלי הים התיכון", completion: 65, status: "בזמן", budget: "₪ 50M" },
                { name: "שכונת הגן החדשה", completion: 15, status: "איחור", budget: "₪ 35M" },
                { name: "קומפלקס הנחל", completion: 100, status: "הושלם", budget: "₪ 42M" },
                { name: "בית הספר החדש", completion: 40, status: "בזמן", budget: "₪ 28M" }
              ].map((project, i) => (
                <div key={i} className="space-y-2" dir="rtl">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-black/60">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.completion === 100 ? "bg-green-500" :
                        project.status === "איחור" ? "bg-red-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-black/60">
                    <span>{project.budget}</span>
                    <span className={`${
                      project.status === "הושלם" ? "text-green-600" :
                      project.status === "איחור" ? "text-red-600" : "text-blue-600"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




