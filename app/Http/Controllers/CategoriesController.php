<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoriesRequest;
use App\Http\Resources\BooksCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Kategori', [
            'title' => 'Kategori',
            'auth' => auth()->user(),
            'kategori' => Categories::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/TambahKategori', [
            'title' => 'Tambah Kategori',
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoriesRequest $request)
    {
        $categories = new Categories();
        $categories->deskripsi = $request->deskripsi;
        $categories->slug = Str::slug($request->deskripsi, '-');
        $categories->save();

        return Redirect::route('admin.kategori');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $categories, $slug)
    {
        $category = Categories::where('slug', $slug)->first();
        $books = $category->books();
        $books = new BooksCollection($books->paginate(10));
        $categories = Categories::all();
        return Inertia::render('User/Kategori', [
            'title' => "Kategori Buku",
            'books' => $books,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $categories, $slug)
    {
        $data =  Categories::where('slug', $slug)->first();
        return Inertia::render('Admin/editKategori', [
            'category' => [
                'title' => 'Sunting Kategori',
                'auth' => auth()->user(),
                'data' => $data
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categories $categories)
    {
        Categories::where('id', $request->id)->update([
            'deskripsi' => $request->deskripsi,
            'slug' => Str::slug($request->deskripsi, '-')
        ]);
        return Redirect::route('admin.kategori');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $kategori = Categories::find($request->id);
        $kategori->delete();
        return Redirect::route('admin.kategori')->with('message', 'Kategori Dihapus.');
    }
}
