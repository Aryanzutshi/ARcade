import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getCourse } from "@/lib/data";

export type ParamsType = Promise<{
  courseId: string;
  moduleId: string;
}>;

export default async function ModulePage({ params }: { params: ParamsType }) {
  const { courseId, moduleId } = await params;

  const course = await getCourse(courseId);

  if (!course || !course.modules_list) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Module Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The module you are looking for does not exist or has been removed.
        </p>
        <Link href="/learn">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            Back to Courses
          </Button>
        </Link>
      </div>
    );
  }

  const moduleIndex = course.modules_list.findIndex(
    (m) => m.id === moduleId
  );

  if (moduleIndex === -1) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Module Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The module you are looking for does not exist or has been removed.
        </p>
        <Link href={`/learn/${courseId}`}>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            Back to Course
          </Button>
        </Link>
      </div>
    );
  }

  const mymodule = course.modules_list[moduleIndex];
  const prevModule = moduleIndex > 0 ? course.modules_list[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.modules_list.length - 1
    ? course.modules_list[moduleIndex + 1]
    : null;

  const completedModules = course.modules_list.filter((m) => m.completed).length;
  const progressPercentage = Math.round(
    (completedModules / course.modules_list.length) * 100
  );

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link
        href={`/learn/${courseId}`}
        className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-white mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Course
      </Link>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{mymodule.title}</h1>
            <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-6">
              <Clock className="mr-2 h-4 w-4 text-blue-500" />
              <span>{mymodule.duration}</span>
              <span className="mx-2">•</span>
              <BookOpen className="mr-2 h-4 w-4 text-purple-500" />
              <span>
                Module {moduleIndex + 1} of {course.modules_list.length}
              </span>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to the {mymodule.title} module! In this module, you&apos;ll learn
                about the fundamentals of{" "}
                {course.title.includes("Arweave")
                  ? "Arweave and permanent storage"
                  : "Web3 development"}
                .
              </p>

              <h2>Learning Objectives</h2>
              <ul>
                <li>Understand the core concepts of {mymodule.title}</li>
                <li>Apply them in real-world scenarios</li>
                <li>Build hands-on skills</li>
                <li>Prepare for upcoming modules</li>
              </ul>

              <h2>Key Concepts</h2>
              <ul>
                <li>Concept 1: Introduction and overview</li>
                <li>Concept 2: Technical foundations</li>
                <li>Concept 3: Practical applications</li>
                <li>Concept 4: Best practices</li>
              </ul>

              <h2>Hands-on Exercise</h2>
              <div className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-md">
                <p className="font-bold">
                  Exercise: Build a basic {mymodule.title.toLowerCase()} component
                </p>
                <ol>
                  <li>Set up your dev environment</li>
                  <li>Scaffold a new project</li>
                  <li>Implement the logic</li>
                  <li>Run and test it</li>
                </ol>
              </div>

              <h2>Summary</h2>
              <p>
                You&apos;ve now explored {mymodule.title} in depth. You&apos;re one step closer to mastering{" "}
                {course.title}.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            {prevModule ? (
              <Link href={`/learn/${courseId}/${prevModule.id}`}>
                <Button variant="outline" className="text-zinc-600 dark:text-zinc-400">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {prevModule.title}
                </Button>
              </Link>
            ) : <div />}

            {nextModule ? (
              <Link href={`/learn/${courseId}/${nextModule.id}`}>
                <Button variant="outline" className="text-zinc-600 dark:text-zinc-400">
                  {nextModule.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href={`/learn/${courseId}`}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Complete Module
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div>
          <div className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Course Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <Progress
                value={progressPercentage}
                className="h-2 bg-zinc-300 dark:bg-zinc-800"
              />
            </div>
            <h4 className="font-medium mb-3">{course.title}</h4>
            <ul className="space-y-2">
              {course.modules_list.map((m, i) => (
                <li key={m.id}>
                  <Link
                    href={`/learn/${courseId}/${m.id}`}
                    className={`flex items-center py-2 px-3 rounded-md text-sm ${
                      m.id === moduleId
                        ? "bg-zinc-200 dark:bg-zinc-800 font-medium"
                        : "hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs ${
                        m.completed
                          ? "bg-green-500/20 text-green-500"
                          : "bg-zinc-300/20 dark:bg-zinc-700/20 text-zinc-500"
                      }`}
                    >
                      {m.completed ? <Check className="h-3 w-3" /> : i + 1}
                    </div>
                    <span>{m.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                {mymodule.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
