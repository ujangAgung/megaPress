<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TagsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BooksController::class, 'index']);
Route::get('/katalog', [BooksController::class, 'katalog']);

Route::get('/kontak', function ()
{
    return Inertia::render('User/Kontak', [
        'title' => 'Kontak'
    ]);
});

Route::get('/acakanlay', function () {
    return Inertia::render('Admin/Index');
});

Route::get('/acakan', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    Route::get('/admin', [BooksController::class, 'indexAdmin']);
    Route::get('/admin/tambah-buku', [BooksController::class, 'create']);

    // kategori Admin
    Route::get('admin/kategori', [CategoriesController::class, 'index'])->name('admin.kategori');
    Route::post('admin/kategori', [CategoriesController::class, 'store'])->name('admin.kategori.store');
    Route::get('admin/tambah-kategori', [CategoriesController::class, 'create'])->name('admin.kategori.tambah');
    Route::get('admin/kategori/{slug}/edit', [CategoriesController::class, 'edit'])->name('admin.kategori.edit');
    Route::put('admin/kategori/{slug}', [CategoriesController::class, 'update'])->name('admin.kategori.update');
<<<<<<< HEAD
    Route::delete('admin/kategori/{id}', [CategoriesController::class, 'destroy'])->name('admin.kategori.destroy');

    // tag Admin
    Route::get('admin/tag', [TagsController::class, 'index'])->name('admin.tag');


=======
    Route::delete('/admin/kategori/{id}', [CategoriesController::class, 'destroy'])->name('admin.kategori.destroy');
>>>>>>> 83d20da806e0a0d901b9f4c55f5b69a193a60cb6
    // Route::resource('/admin/', PostController::class);
});


require __DIR__.'/auth.php';
