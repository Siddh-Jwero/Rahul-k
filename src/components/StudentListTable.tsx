import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Student {
  id: number;
  name: string;
  overall_status: 'Good' | 'Average' | 'Needs Improvement';
  last_active: string;
}

interface StudentListTableProps {
  students: Student[];
}

const statusColorMap = {
  'Good': 'bg-green-500',
  'Average': 'bg-yellow-500',
  'Needs Improvement': 'bg-red-500',
};

const StudentListTable = ({ students }: StudentListTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>
              <Badge className={`${statusColorMap[student.overall_status]} text-white`}>{student.overall_status}</Badge>
            </TableCell>
            <TableCell>{student.last_active}</TableCell>
            <TableCell className="text-right">
              <Link to={`/teacher/student/${student.id}`} className="text-blue-600 hover:underline">
                View Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentListTable;